class Exporter {

    static export(name: string, nodesMap, linksMap) {
        var dia : DiagramDAO = Exporter.exportDiagramStateToDAO(name, nodesMap, linksMap);
        return dia;
    }

    private static exportProperties(properties: PropertiesMap) {
        var newProperties : PropertyDAO[] = [];
        var position: number = 0;
        for (var propertyName in properties) {
            newProperties.push(new PropertyDAO());
            newProperties[position].name = propertyName;
            newProperties[position].value = properties[propertyName].value;
            newProperties[position].type = properties[propertyName].type;
            newProperties[position].position = position;
            position++;
        }
        return newProperties;
    }

    static exportDiagramStateToDAO(name: string, nodesMap, linksMap) : DiagramDAO {
        var mnode: DefaultDiagramNodeDAO[] = [];
        for (var id in nodesMap) {
            var node : DiagramNode = nodesMap[id];
            var newNode = new DefaultDiagramNodeDAO();
            newNode.jointObject = node.getJointObject().id;
            newNode.type = node.getType();
            newNode.x = node.getX();
            newNode.y = node.getY();
            var properties = node.getProperties();
            newNode.properties = Exporter.exportProperties(properties);
            mnode.push(newNode);
        }
        var mlink: LinkDAO[] = [];
        for (var id in linksMap) {
            var link: Link = linksMap[id];
            var newLink: LinkDAO = new LinkDAO();
            var jointObject = link.getJointObject();
            newLink.jointObjectId = jointObject.id;
            newLink.source = jointObject.get('source').id;
            newLink.target = jointObject.get('target').id;
            newLink.properties = Exporter.exportProperties(link.getProperties());
            mlink.push(newLink);
        }
        var dia: DiagramDAO = new DiagramDAO();
        dia.name = name;
        dia.user = "test";
        dia.nodes = mnode;
        dia.links = mlink;

        return dia;
    }
}