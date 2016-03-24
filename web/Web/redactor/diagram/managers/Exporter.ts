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
            newProperties[position].name = propertyName.name;
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
            var jointObject = node.getJointObject();
            newNode.jointObject = jointObject.id;
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
            if (jointObject.get('vertices')) {
                var vertices = jointObject.get('vertices');

                var count:number = 0;

                var newVertices:LinkVertexDAO[] = []
                vertices.forEach(function (vertex) {
                    newVertices.push(new LinkVertexDAO());
                    newVertices[count].x = vertex.x;
                    newVertices[count].y = vertex.y;
                    newVertices[count].number = count;
                    count++;
                });
                newLink.verices = newVertices;
            }
            newLink.jointObjectId = jointObject.id;
            newLink.source = jointObject.get('source').id;
            newLink.target = jointObject.get('target').id;
            newLink.properties = Exporter.exportProperties(link.getProperties());
            mlink.push(newLink);
        }
        var dia: DiagramDAO = new DiagramDAO();
        dia.name = name;
        dia.nodes = mnode;
        dia.links = mlink;

        return dia;
    }
}