var fileSystem = require('fs');


function getNodeIndex(nodeId, nodes){
	for (var index = 0; index < nodes.length; index++){
		if (nodes[index].id == nodeId)
			return index;
	}
	return -1;
}


module.exports = {
	parseQueryGraph : function (request, response){
		

		var graph_data = request.body;
		var query_id = 1;

		var query_stream = fileSystem.createWriteStream("query_"+query_id+".txt");

		query_stream.once('open', function(fd){
			query_stream.write("#query"+query_id);
			query_stream.end();
		});


		var nodes = graph_data.nodes;
		var edges = graph_data.edges;


		
		
		// write the number od nodes to the file
		var nodes_length = nodes.length;
		

		for (var index = 0; index < nodes; index++){
			var node = nodes[index];
			var node_name = node.title;


		}

		//write number of edges to the file
		var edges_length = edges_length;


		for (var index = 0; index < edges; index++){
			var edge  = edges[index];
			var from_edge = getNodeIndex(edge.source, nodes);
			var to_edge = getNodeIndex(edge.target, nodes);

			// write the from_edge and to_edge to the file.

		}

		console.log ("done");

	}
}