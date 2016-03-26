var Importer = (function () {
    function Importer() {
    }
    Importer.import = function (dia, graph, nodesMap, linksMap, nodeTypesMap) {
        for (var i = 0; i < dia.nodes.length; ++i) {
            var nodeObject = dia.nodes[i];
            var properties = Importer.importProperties(nodeObject.properties);
            var node = new DefaultDiagramNode(nodeObject.type, nodeObject.x, nodeObject.y, properties, nodeTypesMap[nodeObject.type].image, nodeObject.jointObject);
            nodesMap[nodeObject.jointObject] = node;
            graph.addCell(node.getJointObject());
        }
        for (var i = 0; i < dia.links.length; ++i) {
            var linkObject = dia.links[i];
            var properties = Importer.importProperties(linkObject.properties);
            var jointObject = new joint.dia.Link({
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
    };
    Importer.importProperties = function (propertiesObject) {
        var properties = {};
        for (var j = 0; j < propertiesObject.length; j++) {
            var property = new Property(propertiesObject[j].value, propertiesObject[j].type);
            properties[propertiesObject[j].name] = property;
        }
        return properties;
    };
    return Importer;
})();
//# sourceMappingURL=Importer.js.map