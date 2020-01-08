(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"cityseer-util-graphs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cityseer-util-graphs","aria-hidden":"true"}},[e._v("#")]),e._v(" cityseer.util.graphs")]),e._v(" "),n("p",[e._v("A collection of convenience functions for the preparation and conversion of "),n("a",{attrs:{href:"https://networkx.github.io/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("NetworkX")]),n("OutboundLink")],1),e._v(" graphs to and from "),n("code",[e._v("cityseer")]),e._v(" data structures. Note that the "),n("code",[e._v("cityseer")]),e._v(" network data structures can be created and manipulated directly, if so desired.")]),e._v(" "),n("h2",{attrs:{id:"nx-simple-geoms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-simple-geoms","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_simple_geoms")]),e._v(" "),n("FuncSignature",[e._v("nX_simple_geoms(networkX_graph)")]),e._v(" "),n("p",[e._v("Generates straight-line geometries for each edge based on the the "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" coordinates of the adjacent nodes. The edge geometry will be stored to the edge "),n("code",[e._v("geom")]),e._v(" attribute.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph with "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"graph",type:"nx.Graph"}},[n("p",[e._v("Returns a "),n("code",[e._v("networkX")]),e._v(" graph with "),n("code",[e._v("shapely")]),e._v(" "),n("a",{attrs:{href:"https://shapely.readthedocs.io/en/latest/manual.html#linestrings",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("Linestring")]),n("OutboundLink")],1),e._v(" geometries assigned to the edge "),n("code",[e._v("geom")]),e._v(" attributes.")])]),e._v(" "),n("h2",{attrs:{id:"nx-from-osm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-from-osm","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_from_osm")]),e._v(" "),n("FuncSignature",[e._v("nX_from_osm(osm_json)")]),e._v(" "),n("p",[e._v("Generates a "),n("code",[e._v("NetworkX")]),e._v(" graph from "),n("a",{attrs:{href:"https://www.openstreetmap.org",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("Open Street Map")]),n("OutboundLink")],1),e._v(" data.")]),e._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[e._v("Caution")]),e._v(" "),n("p",[e._v("Note that graphs created from OSM data make use of "),n("a",{attrs:{href:"https://epsg.io/4326",target:"_blank",rel:"noopener noreferrer"}},[e._v("WGS84"),n("OutboundLink")],1),e._v(" "),n("code",[e._v("lng")]),e._v(", "),n("code",[e._v("lat")]),e._v(" geographic coordinates. Use in combination with "),n("a",{attrs:{href:"#nx-wgs-to-utm"}},[n("code",[e._v("graphs.nX_wgs_to_utm")])]),e._v(" to cast the graph to the local UTM projected coordinate system before subsequent processing.")])]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"osm_json",type:"str"}},[n("p",[e._v("A "),n("code",[e._v("json")]),e._v(" string response from the "),n("a",{attrs:{href:"https://wiki.openstreetmap.org/wiki/Overpass_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSM overpass API"),n("OutboundLink")],1),e._v(", consisting of "),n("code",[e._v("nodes")]),e._v(" and "),n("code",[e._v("ways")]),e._v(".")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("NetworkX")]),e._v(" graph with "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" attributes in "),n("a",{attrs:{href:"https://epsg.io/4326",target:"_blank",rel:"noopener noreferrer"}},[e._v("WGS84"),n("OutboundLink")],1),e._v(" "),n("code",[e._v("lng")]),e._v(", "),n("code",[e._v("lat")]),e._v(" geographic coordinates.")])]),e._v(" "),n("h2",{attrs:{id:"nx-wgs-to-utm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-wgs-to-utm","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_wgs_to_utm")]),e._v(" "),n("FuncSignature",[e._v("nX_wgs_to_utm(networkX_graph, force_zone_number=None)")]),e._v(" "),n("p",[e._v("Converts "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes from "),n("a",{attrs:{href:"https://epsg.io/4326",target:"_blank",rel:"noopener noreferrer"}},[e._v("WGS84"),n("OutboundLink")],1),e._v(" "),n("code",[e._v("lng")]),e._v(", "),n("code",[e._v("lat")]),e._v(" geographic coordinates to the local UTM projected coordinate system. If edge "),n("code",[e._v("geom")]),e._v(" attributes are found, the associated "),n("code",[e._v("LineString")]),e._v(" geometries will also be converted. The UTM zone derived from the first processed node will be used for the conversion of all other nodes and geometries contained in the graph. This ensures consistent behaviour in cases where a graph spans a UTM boundary.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph with "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes in the WGS84 coordinate system. Optional "),n("code",[e._v("geom")]),e._v(" edge attributes containing "),n("code",[e._v("LineString")]),e._v(" geoms to be converted.")])]),e._v(" "),n("FuncElement",{attrs:{name:"force_zone_number",type:"int"}},[n("p",[e._v("An optional UTM zone number for coercing all conversions to an explicit UTM zone. Use with caution: mismatched UTM zones may introduce substantial distortions in the results.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph with "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes converted to the local UTM coordinate system. Edge "),n("code",[e._v("geom")]),e._v(" attributes will also be converted, if found.")])]),e._v(" "),n("h2",{attrs:{id:"nx-remove-dangling-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-remove-dangling-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_remove_dangling_nodes "),n("Chip",{attrs:{text:"v0.8.0"}})],1),e._v(" "),n("FuncSignature",[n("pre",[e._v("nX_remove_dangling_nodes(networkX_graph,\n                         despine=25,\n                         remove_disconnected=True)\n")])]),e._v(" "),n("p",[e._v("Optionally removes short dead-ends or disconnected graph components, which may be prevalent on poor quality network datasets.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph in UTM coordinates, containing "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes, and a "),n("code",[e._v("geom")]),e._v(" edge attribute containing "),n("code",[e._v("LineString")]),e._v(" geoms.")])]),e._v(" "),n("FuncElement",{attrs:{name:"despine",type:"float"}},[n("p",[e._v("The maximum cutoff distance for removal of dead-ends. Use "),n("code",[e._v("0")]),e._v(" where no despining should occur.")])]),e._v(" "),n("FuncElement",{attrs:{name:"remove_disconnected",type:"bool"}},[n("p",[e._v("Whether to remove disconnected components. If set to "),n("code",[e._v("True")]),e._v(", only the largest connected component will be returned.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph with disconnected components optionally removed, and dead-ends removed where less than the "),n("code",[e._v("despine")]),e._v(" parameter distance.")])]),e._v(" "),n("h2",{attrs:{id:"nx-remove-filler-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-remove-filler-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_remove_filler_nodes")]),e._v(" "),n("FuncSignature",[e._v("nX_remove_filler_nodes(networkX_graph)")]),e._v(" "),n("p",[e._v("Removes frivolous nodes where "),n("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[n("mjx-math",{staticClass:" MJX-TEX"},[n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"d"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"e"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"g"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"r"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"e"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"e"}})],1),n("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[n("mjx-c",{attrs:{c:"="}})],1),n("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[n("mjx-c",{attrs:{c:"2"}})],1)],1)],1),e._v(": such nodes represent no route-choices other than continuing-on to the next edge. The edges on either side of the deleted nodes will be removed and replaced with a new unified edge, with "),n("code",[e._v("geom")]),e._v(" attributes welded together.")],1),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph in UTM coordinates, containing "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes, and a "),n("code",[e._v("geom")]),e._v(" edge attribute containing "),n("code",[e._v("LineString")]),e._v(" geoms.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph with nodes of "),n("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[n("mjx-math",{staticClass:" MJX-TEX"},[n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"d"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"e"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"g"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"r"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"e"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"e"}})],1),n("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[n("mjx-c",{attrs:{c:"="}})],1),n("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[n("mjx-c",{attrs:{c:"2"}})],1)],1)],1),e._v(" removed. Adjacent edges will be combined into a single new edge with associated "),n("code",[e._v("geom")]),e._v(" attributes welded together.")],1)]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Hint")]),e._v(" "),n("p",[e._v("Frivolous nodes may be prevalent in poor quality datasets, or in situations where curved roadways have been represented through the addition of nodes to describe arced geometries. "),n("code",[e._v("cityseer")]),e._v(" uses "),n("code",[e._v("shapely")]),e._v(" "),n("a",{attrs:{href:"https://shapely.readthedocs.io/en/latest/manual.html#linestrings",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("Linestrings")]),n("OutboundLink")],1),e._v(" to accurately describe arbitrary road geometries without the need for filler nodes. Filler nodes can therefore be removed, thus reducing potential side-effects when computing network centralities as a function of varied node intensities.")])]),e._v(" "),n("h2",{attrs:{id:"nx-consolidate-spatial"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-consolidate-spatial","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_consolidate_spatial "),n("Chip",{attrs:{text:"v0.8.4"}})],1),e._v(" "),n("FuncSignature",[e._v("nX_consolidate_spatial(networkX_graph, buffer_dist=14)")]),e._v(" "),n("p",[e._v("Consolidates nearby nodes within a specified spatial buffer distance.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Hint")]),e._v(" "),n("p",[e._v("Compare with "),n("a",{attrs:{href:"#nx-consolidate-parallel"}},[n("code",[e._v("nX_consolidate_parallel")])]),e._v(".")])]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph in UTM coordinates, containing "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes, and a "),n("code",[e._v("geom")]),e._v(" edge attribute containing "),n("code",[e._v("LineString")]),e._v(" geoms.")])]),e._v(" "),n("FuncElement",{attrs:{name:"buffer_dist",type:"float"}},[n("p",[e._v("The buffer distance to be used for consolidating nearby nodes.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph. Nodes located within the "),n("code",[e._v("buffer_dist")]),e._v(" distance from other nodes will be consolidated into new parent nodes. The coordinates of the parent nodes will be derived from the aggregate centroid of the highest-degree constituent nodes.")])]),e._v(" "),n("ImageModal",{attrs:{path:a(42),alt:"Example messy graph",caption:"The pre-consolidation OSM street network for Soho, London, with filler nodes removed; dangling nodes removed; and street edges decomposed. © OpenStreetMap contributors."}}),e._v(" "),n("ImageModal",{attrs:{path:a(81),alt:"Example cleaned graph",caption:"Spatially consolidated OSM street network for Soho, London. Compare with the nX_consolidate_parrallel method, below. © OpenStreetMap contributors."}}),e._v(" "),n("h2",{attrs:{id:"nx-consolidate-parallel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-consolidate-parallel","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_consolidate_parallel "),n("Chip",{attrs:{text:"v0.8.7"}})],1),e._v(" "),n("FuncSignature",[e._v("nX_consolidate_parallel(networkX_graph, buffer_dist=14)")]),e._v(" "),n("p",[e._v("Consolidates nearby nodes within a spatial buffer distance, but only if adjacent nodes are found that are also within the buffer distance from each other. This method targets parallel links and may better preserve overall network topology.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph in UTM coordinates, containing "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes, and a "),n("code",[e._v("geom")]),e._v(" edge attribute containing "),n("code",[e._v("LineString")]),e._v(" geoms.")])]),e._v(" "),n("FuncElement",{attrs:{name:"buffer_dist",type:"float"}},[n("p",[e._v("The buffer distance to be used for consolidating nearby nodes.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph. Nodes located within the "),n("code",[e._v("buffer_dist")]),e._v(" distance from other nodes will be consolidated into new parent nodes, but only if each node has respective neighbour nodes within the buffer distance of each other. The coordinates of the parent nodes will be derived from the aggregate centroid of the constituent nodes.")])]),e._v(" "),n("ImageModal",{attrs:{path:a(42),alt:"Example messy graph",caption:"The pre-consolidation OSM street network for Soho, London, with filler nodes removed; dangling nodes removed; and street edges decomposed. © OpenStreetMap contributors."}}),e._v(" "),n("ImageModal",{attrs:{path:a(82),alt:"Example cleaned graph",caption:"Parallel-consolidated OSM street network for Soho, London. Notice that nX_consolidate_parallel better preserves the original street topology as compared to nX_consolidate_spatial. © OpenStreetMap contributors."}}),e._v(" "),n("h2",{attrs:{id:"nx-decompose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-decompose","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_decompose")]),e._v(" "),n("FuncSignature",[e._v("nX_decompose(networkX_graph, decompose_max)")]),e._v(" "),n("p",[e._v("Decomposes a graph so that no edge is longer than a set maximum. Decomposition provides a more granular representation of potential variations along street lengths, while reducing network centrality side-effects that arise as a consequence of varied node densities.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph in UTM coordinates, containing "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes, and a "),n("code",[e._v("geom")]),e._v(" edge attribute containing "),n("code",[e._v("LineString")]),e._v(" geoms. Optional "),n("code",[e._v("live")]),e._v(" node attributes.")])]),e._v(" "),n("FuncElement",{attrs:{name:"decompose_max",type:"nx.Graph"}},[n("p",[e._v("The maximum length threshold for decomposed edges.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"graph",type:"nx.Graph"}},[n("p",[e._v("A decomposed "),n("code",[e._v("networkX")]),e._v(" graph with no edge longer than the "),n("code",[e._v("decompose_max")]),e._v(" parameter. If "),n("code",[e._v("live")]),e._v(" node attributes were provided, then the "),n("code",[e._v("live")]),e._v(" attribute for child-nodes will be set to "),n("code",[e._v("True")]),e._v(" if either or both parent nodes were "),n("code",[e._v("live")]),e._v(". Otherwise, all nodes wil be set to "),n("code",[e._v("live=True")]),e._v(". The "),n("code",[e._v("length")]),e._v(" and "),n("code",[e._v("impedance")]),e._v(" edge attributes will be set to match the lengths of the new edges.")])]),e._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" cityseer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("util "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" mock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" graphs\n\nG "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" mock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mock_graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nG_simple "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" graphs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("nX_simple_geoms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("G"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nG_decomposed "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" graphs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("nX_decompose"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("G_simple"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[n("img",{staticClass:"left",attrs:{src:a(83),alt:"Example graph"}}),n("img",{staticClass:"right",attrs:{src:a(31),alt:"Example decomposed graph"}})]),e._v(" "),n("p",[n("em",[e._v("Simple graph (left) and the equivalent "),n("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[n("mjx-math",{staticClass:" MJX-TEX"},[n("mjx-mn",{staticClass:"mjx-n"},[n("mjx-c",{attrs:{c:"1"}}),n("mjx-c",{attrs:{c:"0"}}),n("mjx-c",{attrs:{c:"0"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"m"}})],1)],1)],1),e._v(" decomposed graph (right).")],1)]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("Setting the "),n("code",[e._v("decompose")]),e._v(" parameter too small in relation to the size of the graph may increase the computation time unnecessarily for subsequent analysis. For larger-scale urban analysis, it is generally not necessary to go smaller "),n("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[n("mjx-math",{staticClass:" MJX-TEX"},[n("mjx-mn",{staticClass:"mjx-n"},[n("mjx-c",{attrs:{c:"2"}}),n("mjx-c",{attrs:{c:"0"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"m"}})],1)],1)],1),e._v(", and "),n("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[n("mjx-math",{staticClass:" MJX-TEX"},[n("mjx-mn",{staticClass:"mjx-n"},[n("mjx-c",{attrs:{c:"5"}}),n("mjx-c",{attrs:{c:"0"}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"m"}})],1)],1)],1),e._v(" may already be sufficient for the majority of cases.")],1)]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Hint")]),e._v(" "),n("p",[e._v("This function will automatically orient the "),n("code",[e._v("geom")]),e._v(" attribute LineStrings in the correct direction before splitting into sub-geometries; i.e. there is no need to order the geometry's coordinates in a particular direction.")])]),e._v(" "),n("h2",{attrs:{id:"nx-to-dual"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-to-dual","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_to_dual")]),e._v(" "),n("FuncSignature",[e._v("nX_to_dual(networkX_graph)")]),e._v(" "),n("p",[e._v("Converts a primal graph representation, where intersections are represented as nodes and streets as edges, to the dual representation, such that edges are converted to nodes and intersections become edges. This is necessary for the computation of simplest-path (angular) metrics. Primal edge "),n("code",[e._v("geom")]),e._v(" attributes will be welded to adjacent edges and split into the new dual edge "),n("code",[e._v("geom")]),e._v(" attributes, from which the "),n("code",[e._v("length")]),e._v(" and "),n("code",[e._v("impedance")]),e._v(" attributes will be set. The angular impedances will be calculated by summing the angular change over the length of the geometry.")]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph in UTM coordinates, containing "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes, and a "),n("code",[e._v("geom")]),e._v(" edge attribute containing "),n("code",[e._v("LineString")]),e._v(" geoms. Optional "),n("code",[e._v("live")]),e._v(" node attributes.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"graph",type:"nx.Graph"}},[n("p",[e._v("A dual representation "),n("code",[e._v("networkX")]),e._v(" graph. The new dual nodes will have "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes corresponding to the mid-points of the original primal edges.")]),e._v(" "),n("p",[e._v("If "),n("code",[e._v("live")]),e._v(" node attributes were provided, then the "),n("code",[e._v("live")]),e._v(" attribute for the new dual nodes will be set to "),n("code",[e._v("True")]),e._v(" if either or both of the adjacent primal nodes were set to "),n("code",[e._v("live=True")]),e._v(". Otherwise, all dual nodes wil be set to "),n("code",[e._v("live=True")]),e._v(".")]),e._v(" "),n("p",[e._v("The primal "),n("code",[e._v("geom")]),e._v(" edge attributes will be split and welded to form the new dual "),n("code",[e._v("geom")]),e._v(" edge attributes, from which the "),n("code",[e._v("length")]),e._v(" and angular "),n("code",[e._v("impedance")]),e._v(" edge attributes will be set. A "),n("code",[e._v("parent_primal_node")]),e._v(" edge attribute will be added, corresponding to the node identifier of the primal graph.")])]),e._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" cityseer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("util "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" mock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" graphs\n\nG "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" mock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mock_graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nG_simple "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" graphs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("nX_simple_geoms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("G"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nG_dual "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" graphs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("nX_to_dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("G_simple"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("img",{staticClass:"centre",staticStyle:{"max-height":"450px"},attrs:{src:a(17),alt:"Example dual graph"}}),e._v(" "),n("p",[n("em",[e._v("Dual graph (blue) overlaid on the source primal graph (red). Edge "),n("code",[e._v("length")]),e._v(" and angular "),n("code",[e._v("impedance")]),e._v(" attributes are set automatically from the "),n("code",[e._v("geom")]),e._v(" attribute's length and total angular change.")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Hint")]),e._v(" "),n("p",[e._v("This function will automatically orient the "),n("code",[e._v("geom")]),e._v(" attribute LineStrings in the correct direction when splitting and welding; i.e. there is no need to order the geometry's coordinates in a particular direction.")])]),e._v(" "),n("h2",{attrs:{id:"graph-maps-from-nx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#graph-maps-from-nx","aria-hidden":"true"}},[e._v("#")]),e._v(" graph_maps_from_nX")]),e._v(" "),n("FuncSignature",[e._v("graph_maps_from_nX(networkX_graph)")]),e._v(" "),n("p",[e._v("Transposes a "),n("code",[e._v("networkX")]),e._v(" graph into "),n("code",[e._v("numpy")]),e._v(" arrays for use by "),n("code",[e._v("Network_Layer")]),e._v(" classes.")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("It is generally not necessary to use this function directly. This function will be called internally when invoking "),n("router-link",{attrs:{to:"/metrics/networks.html#network-layer-from-nx"}},[e._v("Network_Layer_From_nX")])],1)]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph in UTM coordinates.")]),e._v(" "),n("p",[n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" node attributes are required. The "),n("code",[e._v("live")]),e._v(" node attribute is optional, but recommended. The "),n("code",[e._v("ghosted")]),e._v(" attribute should be applied to 'ghosted' nodes on decomposed graphs -- this will be added automatically if using "),n("a",{attrs:{href:"#nx_decompose"}},[n("code",[e._v("nX_decompose")])]),e._v(". See "),n("a",{attrs:{href:"#network-layer"}},[n("code",[e._v("Network_Layer")])]),e._v(" for more information about what these attributes represent.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"node_uids",type:"tuple"}},[n("p",[e._v("A tuple of node "),n("code",[e._v("uids")]),e._v(" corresponding to the node identifiers in the source "),n("code",[e._v("networkX")]),e._v(" graph.")])]),e._v(" "),n("FuncElement",{attrs:{name:"node_data",type:"np.ndarray"}},[n("p",[e._v("A 2d "),n("code",[e._v("numpy")]),e._v(" array representing the graph's nodes. The indices of the second dimension correspond as follows:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("idx")]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("property")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("0")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("x")]),e._v(" coordinate")])]),e._v(" "),n("tr",[n("td",[e._v("1")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("y")]),e._v(" coordinate")])]),e._v(" "),n("tr",[n("td",[e._v("2")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("bool")]),e._v(" describing whether the node is "),n("code",[e._v("live")])])]),e._v(" "),n("tr",[n("td",[e._v("3")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("ghosted")]),e._v(" describing whether the node is a 'ghosted' or 'decomposed' node that is not essential to the network topology.")])])])])]),e._v(" "),n("FuncElement",{attrs:{name:"edge_data",type:"np.ndarray"}},[n("p",[e._v("A 2d "),n("code",[e._v("numpy")]),e._v(" array representing the graph's edges. Each edge will be described separately for each direction of travel. The indices of the second dimension correspond as follows:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("idx")]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("property")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("0")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("start node "),n("code",[e._v("idx")])])]),e._v(" "),n("tr",[n("td",[e._v("1")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("end node "),n("code",[e._v("idx")])])]),e._v(" "),n("tr",[n("td",[e._v("2")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("the segment length in metres")])]),e._v(" "),n("tr",[n("td",[e._v("3")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("the sum of segment's angular change")])]),e._v(" "),n("tr",[n("td",[e._v("4")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("an 'impedance factor' which can be applied to magnify or reduce the effect of the edge's impedance on shortest-path calculations. e.g. for gradients or other such considerations. Use with caution.")])]),e._v(" "),n("tr",[n("td",[e._v("5")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("the edge's entry angular bearing")])]),e._v(" "),n("tr",[n("td",[e._v("6")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("the edge's exit angular bearing")])])])]),e._v(" "),n("p",[e._v("All edge attributes will be generated automatically, however, the impedance factor parameter can be over-ridden by supplying a "),n("code",[e._v("imp_factor")]),e._v(" attribute on the input graph's edges.")])]),e._v(" "),n("FuncElement",{attrs:{name:"node_edge_map",type:"numba.typed.Dict"}},[n("p",[e._v("A "),n("code",[e._v("numba")]),e._v(" "),n("code",[e._v("Dict")]),e._v(" with "),n("code",[e._v("node_data")]),e._v(" indices as keys and "),n("code",[e._v("numba")]),e._v(" "),n("code",[e._v("List")]),e._v(" types as values containing the out-edge indices for each node.")])]),e._v(" "),n("h2",{attrs:{id:"nx-from-graph-maps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nx-from-graph-maps","aria-hidden":"true"}},[e._v("#")]),e._v(" nX_from_graph_maps")]),e._v(" "),n("FuncSignature",[n("pre",[e._v("nX_from_graph_maps(node_uids,\n                   node_data,\n                   edge_data,\n                   node_edge_map,\n                   networkX_graph=None,\n                   metrics_dict=None)\n")])]),e._v(" "),n("p",[e._v("Transposes "),n("code",[e._v("cityseer")]),e._v(" graph maps into a "),n("code",[e._v("networkX")]),e._v(" graph.")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("It is generally not necessary to use this function directly. This function will be called internally when invoking "),n("router-link",{attrs:{to:"/metrics/networks.html#to-networkX"}},[e._v("Network_Layer.to_networkX")])],1)]),e._v(" "),n("FuncHeading",[e._v("Parameters")]),e._v(" "),n("FuncElement",{attrs:{name:"node_uids",type:"tuple"}},[n("p",[e._v("A tuple of node ids corresponding to the node identifiers for the target "),n("code",[e._v("networkX")]),e._v(" graph.")])]),e._v(" "),n("FuncElement",{attrs:{name:"node_data",type:"np.ndarray"}},[n("p",[e._v("A 2d "),n("code",[e._v("numpy")]),e._v(" array representing the graph's nodes. The indices of the second dimension should correspond as follows:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("idx")]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("property")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("0")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("x")]),e._v(" coordinate")])]),e._v(" "),n("tr",[n("td",[e._v("1")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("y")]),e._v(" coordinate")])]),e._v(" "),n("tr",[n("td",[e._v("2")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("bool")]),e._v(" describing whether the node is "),n("code",[e._v("live")])])]),e._v(" "),n("tr",[n("td",[e._v("3")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("ghosted")]),e._v(" describing whether the node is a 'ghosted' or 'decomposed' node that is not essential to the network topology.")])])])])]),e._v(" "),n("FuncElement",{attrs:{name:"edge_data",type:"np.ndarray"}},[n("p",[e._v("A 2d "),n("code",[e._v("numpy")]),e._v(" array representing the graph's directional edges. The indices of the second dimension should correspond as follows:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("idx")]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("property")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("0")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("start node "),n("code",[e._v("idx")])])]),e._v(" "),n("tr",[n("td",[e._v("1")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("end node "),n("code",[e._v("idx")])])]),e._v(" "),n("tr",[n("td",[e._v("2")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("the segment length in metres")])]),e._v(" "),n("tr",[n("td",[e._v("3")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("the sum of segment's angular change")])]),e._v(" "),n("tr",[n("td",[e._v("4")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("'impedance factor' applied to magnify or reduce the edge impedance.")])]),e._v(" "),n("tr",[n("td",[e._v("5")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("the edge's entry angular bearing")])]),e._v(" "),n("tr",[n("td",[e._v("6")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("the edge's exit angular bearing")])])])])]),e._v(" "),n("FuncElement",{attrs:{name:"node_edge_map",type:"numba.typed.Dict"}},[n("p",[e._v("A "),n("code",[e._v("numba")]),e._v(" "),n("code",[e._v("Dict")]),e._v(" with "),n("code",[e._v("node_data")]),e._v(" indices as keys and "),n("code",[e._v("numba")]),e._v(" "),n("code",[e._v("List")]),e._v(" types as values containing the out-edge indices for each node.")])]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("An optional "),n("code",[e._v("networkX")]),e._v(" graph to use as a backbone for unpacking the data. The number of nodes and edges should correspond to the "),n("code",[e._v("cityseer")]),e._v(" data maps and the node identifiers should correspond to the "),n("code",[e._v("node_uids")]),e._v(". If not provided, then a new "),n("code",[e._v("networkX")]),e._v(" graph will be returned. This function is intended to be used for situations where "),n("code",[e._v("cityseer")]),e._v(" data is being transposed back to a source "),n("code",[e._v("networkX")]),e._v(" graph.")])]),e._v(" "),n("FuncElement",{attrs:{name:"metrics_dict",type:"dict"}},[n("p",[e._v("An optional dictionary with keys corresponding to the identifiers in "),n("code",[e._v("node_uids")]),e._v(". The dictionary's "),n("code",[e._v("values")]),e._v(" will be unpacked to the corresponding nodes in the "),n("code",[e._v("networkX")]),e._v(" graph.")])]),e._v(" "),n("FuncHeading",[e._v("Returns")]),e._v(" "),n("FuncElement",{attrs:{name:"networkX_graph",type:"nx.Graph"}},[n("p",[e._v("A "),n("code",[e._v("networkX")]),e._v(" graph. If a backbone graph was provided, a copy of the same graph will be returned with the data overridden as described below. If no graph was provided, then a new graph will be generated.")]),e._v(" "),n("p",[n("code",[e._v("x")]),e._v(", "),n("code",[e._v("y")]),e._v(", "),n("code",[e._v("live")]),e._v(", "),n("code",[e._v("ghosted")]),e._v(" node attributes will be copied from "),n("code",[e._v("node_data")]),e._v(" to the graph nodes. "),n("code",[e._v("length")]),e._v(", "),n("code",[e._v("angle_sum")]),e._v(", "),n("code",[e._v("imp_factor")]),e._v(", "),n("code",[e._v("start_bearing")]),e._v(", and "),n("code",[e._v("end_bearing")]),e._v(" attributes will be copied from the "),n("code",[e._v("edge_data")]),e._v(" to the graph edges.")]),e._v(" "),n("p",[e._v("If a "),n("code",[e._v("metrics_dict")]),e._v(" is provided, all data will be copied to the graph nodes based on matching node identifiers.")])])],1)},[],!1,null,null,null);t.default=o.exports},17:function(e,t,a){e.exports=a.p+"assets/img/graph_dual.84af1117.png"},31:function(e,t,a){e.exports=a.p+"assets/img/graph_decomposed.96e93b11.png"},42:function(e,t,a){e.exports=a.p+"assets/img/graph_messy.0ba6a2fe.png"},81:function(e,t,a){e.exports=a.p+"assets/img/graph_clean_spatial.84ea8cc8.png"},82:function(e,t,a){e.exports=a.p+"assets/img/graph_clean_parallel.7c32fdf1.png"},83:function(e,t,a){e.exports=a.p+"assets/img/graph_simple.f6bad671.png"}}]);