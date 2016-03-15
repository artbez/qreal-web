var ImportManager = (function () {
    function ImportManager() {
    }
    ImportManager.import = function (response, graph, nodesMap, linksMap, nodeTypesMap) {
        for (var i = 0; i < response.nodes.length; i++) {
            var nodeObject = response.nodes[i];
            var properties = ImportManager.importProperties(nodeObject.properties);
            this.importNode(graph, nodesMap, nodeObject.jointObjectId, nodeObject.type, nodeObject.x, nodeObject.y, properties, nodeTypesMap[nodeObject.type].image);
        }
        for (var i = 0; i < response.links.length; i++) {
            var linkObject = response.links[i];
            var properties = ImportManager.importProperties(linkObject.properties);
            var vertices = this.importVertices(linkObject.vertices);
            this.importLink(graph, linksMap, linkObject.jointObjectId, linkObject.source, linkObject.target, vertices, properties);
        }
        return response.nodeIndex;
    };
    ImportManager.importProperties = function (propertiesObject) {
        var properties = {};
        for (var j = 0; j < propertiesObject.length; j++) {
            var property = new Property(propertiesObject[j].value, propertiesObject[j].type);
            properties[propertiesObject[j].name] = property;
        }
        return properties;
    };
    ImportManager.importNode = function (graph, nodesMap, jointObjectId, type, x, y, properties, imagePath) {
        var node = new DefaultDiagramNode(type, x, y, properties, imagePath, jointObjectId);
        nodesMap[jointObjectId] = node;
        graph.addCell(node.getJointObject());
    };
    ImportManager.importLink = function (graph, linksMap, jointObjectId, sourceId, targetId, vertices, properties) {
        var jointObject = new joint.dia.Link({
            id: jointObjectId,
            attrs: {
                '.connection': { stroke: 'black' },
                '.marker-target': { fill: 'black', d: 'M 10 0 L 0 5 L 10 10 z' }
            },
            source: { id: sourceId },
            target: { id: targetId },
            vertices: vertices
        });
        linksMap[jointObjectId] = new Link(jointObject, properties);
        graph.addCell(jointObject);
    };
    ImportManager.importVertices = function (verticesJSON) {
        var vertices = [];
        verticesJSON.forEach(function (vertex) {
            vertices.push({
                x: vertex.x,
                y: vertex.y
            });
        });
        return vertices;
    };
    return ImportManager;
})();
//# sourceMappingURL=ImportManager.js.map