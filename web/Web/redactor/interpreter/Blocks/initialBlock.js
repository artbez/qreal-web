var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InitialBlock = (function (_super) {
    __extends(InitialBlock, _super);
    function InitialBlock() {
        _super.apply(this, arguments);
    }
    InitialBlock.run = function (node, graph, nodesMap, linksMap, env, timeline) {
        var output = "Initial" + "\n";
        var nodeId = InterpretManager.getIdByNode(node, nodesMap);
        var links = InterpretManager.getOutboundLinks(graph, nodeId);
        if (links.length == 1) {
            var nextNode = nodesMap[links[0].get('target').id];
            output += Factory.run(nextNode, graph, nodesMap, linksMap, env, timeline) + "\n";
        }
        else if (links.length > 1) {
            output += "Error: too many links\n";
        }
        return output;
    };
    return InitialBlock;
})(Block);
//# sourceMappingURL=initialBlock.js.map