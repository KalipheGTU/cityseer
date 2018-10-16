---

---
<renderMath></renderMath>

# centrality

## distance from beta.. again

This is a convenience function for mapping $-\beta$ decay parameters to equivalent $d_{max}$ distance thresholds.

<displayFunction>
    <template slot='function'>
        distance_from_beta(beta, min_threshold_wt=0.01831563888873418)
    </template>
</displayFunction>

##### params
___

**beta** (`float`, `list[float]`): The $-\beta$ that you wish to convert to distance thresholds.

**min_threshold_wt** (`float`): The $w_{min}$ threshold..

##### returns
___

**betas** (`np.ndarray`): A numpy array of effective $d_{max}$ distances.

**min_threshold_wt** (`float`): The corresponding $w_{min}$ threshold.


::: tip
There is no need to use this function unless:

- Providing custom beta values for weighted centrality measures, instead of using the generated defaults;
- Using custom `min_threshold_wt` parameters.
:::

::: warning Important
Pass both $d_{max}$ and $w_{min}$ to [`centrality.compute_centrality`](#compute-centrality-a) for the desired behaviour.
:::



The weighted variants of centrality, e.g. gravity or weighted betweenness, are computed using a negative exponential decay function of the form:

$$
weight = exp(-\beta \cdot distance)
$$

The strength of the decay is controlled by the $-\beta$ parameter, which reflects a decreasing willingness to walk correspondingly farther distances.
For example, if $-\beta=0.005$ represents a person's willingness to walk to a bus stop, then a location 100m distant would be weighted at 60% and a location 400m away would be weighted at 13.5%. After an initially rapid decrease, the weightings decay ever more gradually in perpetuity. At some point, it becomes futile to consider locations any farther away, so it is necessary to set a a minimum weight threshold $w_{min}$ corresponding to a maximum distance of $d_{max}$.

The [`centrality.compute_centrality`](#compute-centrality-a) method computes the $-\beta$ parameters automatically, using a default `min_threshold_wt` of $w_{min}=0.01831563888873418$.

$$
\beta = \frac{log\Big(1 / w_{min}\Big)}{d_{max}}
$$

Therefore, $-\beta$ weights corresponding to $d_{max}$ walking thresholds of 400m, 800m, and 1600m would give:

| $d_{max}$ | $-\beta$ |
|-----------|:----------|
| $400m$ | $-0.01$ |
| $800m$ | $-0.005$ |
| $1600m$ | $-0.0025$ |

In reality, people may be more or less willing to walk based on the specific purpose of the trip and the pedestrian-friendliness of the urban context. If overriding the defaults, or to use a custom $-\beta$ or a different $w_{min}$ threshold, then this function can be used to generate the effective $d_{max}$ values, which can then be passed to [`centrality.compute_centrality`](#compute-centrality-a) along with the specified $w_{min}$. For example, the following $-\beta$ and $w_{min}$ thresholds yield these effective $d_{max}$ distances:

| $-\beta$ | $w_{min}$ | $d_{max}$ |
|----------|:----------|:----------|
| $-0.01$ | $0.01$ | $461m$ |
| $-0.005$ | $0.01$ | $921m$ |
| $-0.0025$ | $0.01$ | $1842m$ |


## compute centrality af

A convenience function for generating a ``node_map`` and ``edge_map`` from a `NetworkX <https://networkx.github.io/documentation/networkx-1.10/index.html>`_ undirected Graph, which can then be passed to :meth:`cityseer.centrality.compute_centrality`.

Parameters
----------
network_x_graph
    A NetworkX undirected ``Graph``. Requires node attributes ``x`` and ``y`` for spatial coordinates and accepts optional ``length`` and ``weight`` edge attributes. See notes.
wgs84_coords
    Set to ``True`` if the ``x`` and ``y`` node attribute keys reference `WGS84 <https://epsg.io/4326>`_ lng, lat values instead of a projected coordinate system.
decompose
    Generates a decomposed version of the graph wherein edges are broken into smaller sections no longer than the specified distance in metres.
geom
    Shapely geometry defining the original area of interest. Recommended for avoidance of boundary roll-off in computed metrics.

Returns
-------
node_map
    containing node data
edge_map
    containing edge data

Notes
-----

The node attributes ``x`` and ``y`` determine the spatial coordinates of the node, and should be in a suitable projected (flat) coordinate reference system in metres unless the ``wgs84_coords`` parameter is set to ``True``.

The optional edge attribute ``length`` indicates the original edge length in metres. If not provided, lengths will be computed using crow-flies distances between either end of the edges.

If provided, the optional edge attribute ``weight`` will be used by shortest path algorithms instead of distances in metres.

Tip
---
When calculating local network centralities, it is best-practise for the area of interest to have been buffered by a distance equal to the maximum distance threshold to be considered. This prevents misleading results arising due to a boundary roll-off effect. If provided, the ``geom`` geometry is used to identify nodes falling within the original non-buffered area of interest. Metrics will then only be computed for these nodes, thus avoiding roll-off effects and reducing frivolous computation. (The algorithms still have access to the full buffered network.)

Caution
-------
Graph decomposition provides a more granular representation of variations along street lengths. However, setting the ``decompose`` parameter too small can increase the computation time unnecessarily for subsequent analysis. It is generally not necessary to go smaller :math:`20m`, and :math:`50m` may already be sufficient for many cases.