var Exporter = (function () {
    function Exporter() {
    }
    Exporter.exportProperties = function (properties) {
        var newProperties = [];
        var position = 1;
        for (var propertyName in properties) {
            newProperties.push(new PropertyDAO());
            newProperties[position - 1].name = propertyName.name;
            newProperties[position - 1].value = properties[propertyName].value;
            newProperties[position - 1].type = properties[propertyName].type;
            newProperties[position - 1].position = position;
            position++;
        }
        return newProperties;
    };
    Exporter.exportDiagramStateToDAO = function (name, nodesMap, linksMap) {
        var mnode = [];
        for (var id in nodesMap) {
            var node = nodesMap[id];
            var newNode = new DefaultDiagramNodeDAO();
            newNode.nodeId = node.getJointObject().id;
            newNode.type = node.getType();
            newNode.x = node.getX();
            newNode.y = node.getY();
            var properties = node.getProperties();
            newNode.properties = Exporter.exportProperties(properties);
            mnode.push(newNode);
        }
        var mlink = [];
        for (var id in linksMap) {
            var link = linksMap[id];
            var newLink = new LinkDAO();
            var jointObject = link.getJointObject();
            var vertices = jointObject.get('vertices');
            var count = 1;
            var newVertices = [];
            vertices.forEach(function (vertex) {
                newVertices.push(new LinkVertexDAO());
                newVertices[count - 1].x = vertex.x;
                newVertices[count - 1].y = vertex.y;
                newVertices[count - 1].number = count;
            });
            count++;
            newLink.verices = newVertices;
            newLink.jointObjectId = jointObject.id;
            newLink.source = jointObject.get('source').id;
            newLink.target = jointObject.get('target').id;
            newLink.properties = Exporter.exportProperties(link.getProperties());
            mlink.push(newLink);
        }
        var dia = new DiagramDAO();
        dia.name = name;
        dia.nodes = mnode;
        dia.links = mlink;
        return dia;
    };
    return Exporter;
})();
//# sourceMappingURL=Exporter.js.map