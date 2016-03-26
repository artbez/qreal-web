var Exporter = (function () {
    function Exporter() {
    }
    Exporter.export = function (name, nodesMap, linksMap) {
        var dia = Exporter.exportDiagramStateToDAO(name, nodesMap, linksMap);
        return dia;
    };
    Exporter.exportProperties = function (properties) {
        var newProperties = [];
        var position = 0;
        for (var propertyName in properties) {
            newProperties.push(new PropertyDAO());
            newProperties[position].name = propertyName;
            newProperties[position].value = properties[propertyName].value;
            newProperties[position].type = properties[propertyName].type;
            newProperties[position].position = position;
            position++;
        }
        return newProperties;
    };
    Exporter.exportDiagramStateToDAO = function (name, nodesMap, linksMap) {
        var mnode = [];
        for (var id in nodesMap) {
            var node = nodesMap[id];
            var newNode = new DefaultDiagramNodeDAO();
            newNode.jointObject = node.getJointObject().id;
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
            newLink.jointObjectId = jointObject.id;
            newLink.source = jointObject.get('source').id;
            newLink.target = jointObject.get('target').id;
            newLink.properties = Exporter.exportProperties(link.getProperties());
            mlink.push(newLink);
        }
        var dia = new DiagramDAO();
        dia.name = name;
        dia.user = "test";
        dia.nodes = mnode;
        dia.links = mlink;
        return dia;
    };
    return Exporter;
})();
//# sourceMappingURL=Exporter.js.map