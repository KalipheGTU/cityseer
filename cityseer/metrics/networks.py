'''
Centrality methods
'''
import logging
from typing import Union

import networkx as nx
import numpy as np

from cityseer.algos import centrality, checks
from cityseer.util import graphs

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def distance_from_beta(beta: Union[float, list, np.ndarray],
                       min_threshold_wt: float = checks.def_min_thresh_wt) -> np.ndarray:
    # cast to list form
    if isinstance(beta, (int, float)):
        beta = [beta]
    if not isinstance(beta, (list, tuple, np.ndarray)):
        raise TypeError('Please provide a beta or a list, tuple, or numpy.ndarray of betas.')
    # check that the betas do not have leading negatives
    for b in beta:
        if b > 0:
            raise ValueError('Please provide the beta value with the leading negative.')
        elif b == 0:
            # ints have no concept of -0, so catch betas that are positive 0 or -0 (in int form)
            # i.e. betas of -0.0 will successfully result in np.inf as opposed to -np.inf
            if np.log(min_threshold_wt) / b == -np.inf:
                raise ValueError('Please provide zeros in float form with a leading negative.')
    # cast to numpy
    beta = np.array(beta)
    # deduce the effective distance thresholds
    return np.log(min_threshold_wt) / beta


def beta_from_distance(distance: Union[float, list, np.ndarray],
                       min_threshold_wt: float = checks.def_min_thresh_wt) -> np.ndarray:
    # cast to list form
    if isinstance(distance, (int, float)):
        distance = [distance]
    if not isinstance(distance, (list, tuple, np.ndarray)):
        raise TypeError('Please provide a distance or a list, tuple, or numpy.ndarray of distances.')
    # check that the betas do not have leading negatives
    for d in distance:
        if d <= 0:
            raise ValueError('Please provide a positive distance value.')
    # cast to numpy
    distance = np.array(distance)
    # deduce the effective distance thresholds
    return np.log(min_threshold_wt) / distance


class Network_Layer:

    def __init__(self,
                 node_uids: Union[list, tuple],
                 node_map: np.ndarray,
                 edge_map: np.ndarray,
                 distances: Union[list, tuple, np.ndarray] = None,
                 betas: Union[list, tuple, np.ndarray] = None,
                 min_threshold_wt: float = checks.def_min_thresh_wt,
                 dual: bool = False):

        '''
        NODE MAP:
        0 - x
        1 - y
        2 - live
        3 - edge indx
        4 - weight

        EDGE MAP:
        0 - start node
        1 - end node
        2 - length in metres
        3 - impedance
        '''

        self._uids = node_uids
        self._nodes = node_map
        self._edges = edge_map
        self._distances = distances
        self._betas = betas
        self._min_threshold_wt = min_threshold_wt
        self._dual = dual
        self.metrics = {
            'centrality': {},
            'mixed_uses': {},
            'accessibility': {
                'non_weighted': {},
                'weighted': {}
            },
            'stats': {},
            'models': {}
        }
        self._networkX = None

        # check the data structures
        if len(self._uids) != len(self._nodes):
            raise ValueError('The number of indices does not match the number of nodes.')

        checks.check_network_maps(self._nodes, self._edges)

        # if distances, check the types and generate the betas
        if self._distances is not None and self._betas is None:
            if isinstance(self._distances, (int, float)):
                self._distances = [self._distances]
            if isinstance(self._distances, (list, tuple, np.ndarray)):
                if len(self._distances) == 0:
                    raise ValueError('Please provide at least one distance.')
            else:
                raise TypeError('Please provide a distance, or a list, tuple, or numpy.ndarray of distances.')
            # generate the betas
            self._betas = beta_from_distance(self._distances,
                                             min_threshold_wt=self._min_threshold_wt)
        # if betas, generate the distances
        elif self._betas is not None and self._distances is None:
            if isinstance(self._betas, (float)):
                self._betas = [self._betas]
            if isinstance(self._betas, (list, tuple, np.ndarray)):
                if len(self._betas) == 0:
                    raise ValueError('Please provide at least one beta.')
            else:
                raise TypeError('Please provide a beta, or a list, tuple, or numpy.ndarray of betas.')
            self._distances = distance_from_beta(self._betas,
                                                 min_threshold_wt=self._min_threshold_wt)
        else:
            raise ValueError('Please provide either distances or betas, but not both.')

    @property
    def uids(self):
        return self._uids

    @property
    def distances(self):
        return self._distances

    @property
    def betas(self):
        return self._betas

    @property
    def min_threshold_wt(self):
        return self._min_threshold_wt

    @property
    def angular(self):
        return self._angular

    @property
    def x_arr(self):
        return self._nodes[:, 0]

    @property
    def y_arr(self):
        return self._nodes[:, 1]

    @property
    def live(self):
        return self._nodes[:, 2]

    @property
    def weights(self):
        return self._nodes[:, 4]

    @weights.setter
    def weights(self, weights):
        if not isinstance(weights, (list, tuple, np.ndarray)):
            raise TypeError('Weights should consist of a list, tuple, or numpy.ndarray of weights.')
        weights = np.array(weights)
        if not weights.ndim == 1 or not weights.shape[0] == self._nodes.shape[0]:
            raise ValueError('Weights should be a single dimensional array of the same length as the number of nodes.')
        self._nodes[:, 4] = weights
        checks.check_network_maps(self._nodes, self._edges)

    @property
    def edge_lengths(self):
        return self._edges[:, 2]

    @property
    def edge_impedances(self):
        return self._edges[:, 3]

    @property
    def networkX(self):
        return self._networkX

    @networkX.setter
    def networkX(self, value):
        self._networkX = value

    def metrics_to_dict(self):
        '''
        metrics are stored in arrays, this method unpacks per uid
        '''
        m = {}
        for i, uid in enumerate(self._uids):
            m[uid] = {
                'x': self.x_arr[i],
                'y': self.y_arr[i],
                'live': self.live[i] == 1,
                'weight': self._nodes[:, 4][i]
            }
            # unpack centralities
            m[uid]['centrality'] = {}
            for m_key, m_val in self.metrics['centrality'].items():
                m[uid]['centrality'][m_key] = {}
                for d_key, d_val in m_val.items():
                    m[uid]['centrality'][m_key][d_key] = d_val[i]

            m[uid]['mixed_uses'] = {}
            for m_key, m_val in self.metrics['mixed_uses'].items():
                m[uid]['mixed_uses'][m_key] = {}
                if 'hill' in m_key:
                    for q_key, q_val in m_val.items():
                        m[uid]['mixed_uses'][m_key][q_key] = {}
                        for d_key, d_val in q_val.items():
                            m[uid]['mixed_uses'][m_key][q_key][d_key] = d_val[i]
                else:
                    for d_key, d_val in m_val.items():
                        m[uid]['mixed_uses'][m_key][d_key] = d_val[i]

            m[uid]['accessibility'] = {
                'non_weighted': {},
                'weighted': {}
            }
            for cat in ['non_weighted', 'weighted']:
                for cl_key, cl_val in self.metrics['accessibility'][cat].items():
                    m[uid]['accessibility'][cat][cl_key] = {}
                    for d_key, d_val in cl_val.items():
                        m[uid]['accessibility'][cat][cl_key][d_key] = d_val[i]

            m[uid]['stats'] = {}
            for th_key, th_val in self.metrics['stats'].items():
                m[uid]['stats'][th_key] = {}
                for stat_key, stat_val in th_val.items():
                    m[uid]['stats'][th_key][stat_key] = {}
                    for d_key, d_val in stat_val.items():
                        m[uid]['stats'][th_key][stat_key][d_key] = d_val[i]

        return m

    def to_networkX(self):
        metrics_dict = self.metrics_to_dict()
        return graphs.nX_from_graph_maps(self._uids, self._nodes, self._edges, self._networkX, metrics_dict)

    def compute_centrality(self, measures: Union[list, tuple] = None, angular:bool = False):
        '''
        This method provides access to the underlying centrality.local_centrality method
        '''
        # see centrality.local_centrality for integrity checks on closeness and betweenness keys
        # typos are caught below
        if not angular:
            heuristic = 'shortest'
            options = (
                'node_density',
                'farness',
                'cycles',
                'harmonic_node',
                'beta_node',
                'segment_density',
                'harmonic_segment',
                'beta_segment',
                'betweenness_node',
                'betweenness_node_wt',
                'betweenness_segment'
            )
        else:
            heuristic = 'simplest'
            options = (
                'harmonic_node_angle',
                'harmonic_segment_hybrid',
                'betweenness_node_angle',
                'betweeness_segment_hybrid'
        )
        if measures is None:
            raise ValueError(f'Please select at least one measure to compute.')
        keys = []
        for measure in measures:
            if measure not in options:
                raise ValueError(f'Invalid network measure: {measure}. '
                                 f'Must be one of {", ".join(options)} when using f{heuristic} path heuristic.')
            if measure in keys:
                raise ValueError(f'Please remove duplicate measure: {measure}.')
            keys.append(measure)
        keys = tuple(keys)
        if not checks.quiet_mode:
            logger.info(f'Computing {", ".join(keys)} centrality measures using {heuristic} path heuristic.')
        measures_data = centrality.local_centrality(
            self._nodes,
            self._edges,
            np.array(self._distances),
            np.array(self._betas),
            keys,
            angular,
            suppress_progress=checks.quiet_mode)
        # write the results
        # writing metrics to dictionary will check for pre-existing
        # but writing sub-distances arrays will overwrite prior
        for measure_idx, measure_name in enumerate(keys):
            if measure_name not in self.metrics['centrality']:
                self.metrics['centrality'][measure_name] = {}
            for d_idx, d_key in enumerate(self._distances):
                self.metrics['centrality'][measure_name][d_key] = measures_data[measure_idx][d_idx]


class Network_Layer_From_nX(Network_Layer):

    def __init__(self,
                 networkX_graph: nx.Graph,
                 distances: Union[list, tuple, np.ndarray] = None,
                 betas: Union[list, tuple, np.ndarray] = None,
                 min_threshold_wt: float = checks.def_min_thresh_wt,
                 angular: bool = False):
        node_uids, node_map, edge_map = graphs.graph_maps_from_nX(networkX_graph)

        super().__init__(node_uids,
                         node_map,
                         edge_map,
                         distances,
                         betas,
                         min_threshold_wt,
                         angular)

        self.networkX = networkX_graph
