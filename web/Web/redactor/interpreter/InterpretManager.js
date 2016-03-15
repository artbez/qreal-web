var InterpretManager = (function () {
    function InterpretManager() {
    }
    InterpretManager.interpret = function (graph, nodesMap, linksMap, timeline) {
        var elements = graph.getElements();
        var links = graph.getLinks();
        var output = "";
        var env = {};
        if (elements.length > 0) {
            if (links.length > 0) {
                var firstNodeId = InterpretManager.findInitialNode(nodesMap);
                if (firstNodeId != "") {
                    timeline.start();
                    output += Factory.run(nodesMap[firstNodeId], graph, nodesMap, linksMap, env, timeline);
                }
                else {
                    output += "No initial node";
                }
            }
            else {
                output += "No links";
            }
        }
        else {
            output += "No elements";
        }
        return output;
    };
    InterpretManager.findInitialNode = function (nodesMap) {
        var firstNodeId = "";
        for (var id in nodesMap) {
            if (nodesMap.hasOwnProperty(id)) {
                var node = nodesMap[id];
                if (node.type == "Initial Node") {
                    firstNodeId = id;
                    break;
                }
            }
        }
        return firstNodeId;
    };
    InterpretManager.getOutboundLinks = function (graph, nodeId) {
        var e = graph.getCell(nodeId);
        var outboundLinks = graph.getConnectedLinks(e, { outbound: true });
        return outboundLinks;
    };
    InterpretManager.getIdByNode = function (node, nodesMap) {
        for (var property in nodesMap) {
            if (nodesMap.hasOwnProperty(property)) {
                if (nodesMap[property] === node)
                    return property;
            }
        }
    };
    return InterpretManager;
})();
//# sourceMappingURL=InterpretManager.js.map