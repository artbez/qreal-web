class Importer {
    static import(dia: DiagramDAO, graph: joint.dia.Graph, nodesMap, linksMap, nodeTypesMap: NodeTypesMap): number {
        for (var i = 0; i < dia.nodes.length; ++i) {
            var nodeObject = dia.nodes[i];
            var properties: PropertiesMap = Importer.importProperties(nodeObject.properties);
            var node: DefaultDiagramNode = new DefaultDiagramNode(nodeObject.type,
                nodeObject.x, nodeObject.y, properties, nodeTypesMap[nodeObject.type].image, nodeObject.jointObject);
            nodesMap[nodeObject.jointObject] = node;
            graph.addCell(node.getJointObject());
        }

        for (var i = 0; i < dia.links.length; ++i) {
            var linkObject = dia.links[i];
            var properties: PropertiesMap = Importer.importProperties(linkObject.properties);
            var jointObject: joint.dia.Link = new joint.dia.Link({
                id: linkObject.jointObjectId,
                attrs: {
                    '.connection': { stroke: 'black' },
                    '.marker-target': { fill: 'black', d: 'M 10 0 L 0 5 L 10 10 z' }
                },
                source: { id: linkObject.source },
                target: { id: linkObject.target }
            });

            linksMap[linkObject.jointObjectId] = new Link(jointObject, properties);
            graph.addCell(jointObject);
        }

        return dia.diagramId;
    }

    private static importProperties(propertiesObject): PropertiesMap {
        var properties: PropertiesMap = {};

        for (var j = 0; j < propertiesObject.length; j++) {
            var property: Property = new Property(propertiesObject[j].value, propertiesObject[j].type);
            properties[propertiesObject[j].name] = property;
        }

        return properties;
    }
}