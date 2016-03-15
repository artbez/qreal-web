var ExportManager = (function () {
    function ExportManager() {
    }
    ExportManager.exportDiagramStateToJSON = function (name, nodesMap, linksMap) {
        var json = {
            'name': name,
            'nodes': [],
            'links': []
        };
        ExportManager.exportNodes(json, nodesMap);
        ExportManager.exportLinks(json, linksMap);
        return JSON.stringify(json);
    };
    ExportManager.exportNodes = function (json, nodesMap) {
        for (var id in nodesMap) {
            var node = nodesMap[id];
            var nodeJSON = {
                'jointObjectId': node.getJointObject().id,
                'type': node.getType(),
                'x': node.getX(),
                'y': node.getY(),
                'properties': []
            };
            nodeJSON.properties = ExportManager.exportProperties(node.getProperties());
            json.nodes.push(nodeJSON);
        }
    };
    ExportManager.exportLinks = function (json, linksMap) {
        for (var id in linksMap) {
            var link = linksMap[id];
            var jointObject = link.getJointObject();
            var vertices = [];
            if (jointObject.get('vertices')) {
                vertices = ExportManager.exportVertices(jointObject.get('vertices'));
            }
            var linkJSON = {
                'jointObjectId': jointObject.id,
                'source': jointObject.get('source').id,
                'target': jointObject.get('target').id,
                'vertices': vertices,
                'properties': []
            };
            linkJSON.properties = ExportManager.exportProperties(link.getProperties());
            json.links.push(linkJSON);
        }
    };
    ExportManager.exportProperties = function (properties) {
        var propertiesJSON = [];
        var position = 1;
        for (var propertyName in properties) {
            var property = {
                'name': propertyName,
                'value': properties[propertyName].value,
                'type': properties[propertyName].type,
                'position': position
            };
            propertiesJSON.push(property);
            position++;
        }
        return propertiesJSON;
    };
    ExportManager.exportVertices = function (vertices) {
        var verticesJSON = [];
        var count = 1;
        vertices.forEach(function (vertex) {
            verticesJSON.push({
                x: vertex.x,
                y: vertex.y,
                number: count
            });
            count++;
        });
        return verticesJSON;
    };
    return ExportManager;
})();
//# sourceMappingURL=ExportManager.js.map