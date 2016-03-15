var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        _super.apply(this, arguments);
    }
    Timer.run = function (node, graph, nodesMap, linksMap, env, timeline) {
        var output = "Timer" + "\n";
        var delay = 0;
        var nodeId = InterpretManager.getIdByNode(node, nodesMap);
        var links = InterpretManager.getOutboundLinks(graph, nodeId);
        var properties = node.getProperties();
        for (var p in properties) {
            if (p == "Delay (ms)") {
                var parser = new Parser(properties[p].value, env);
                parser.parseExpression();
                if (parser.error == null) {
                    delay = parser.result;
                    if (delay < 0) {
                        output += "Error: incorrect delay value";
                    }
                    else {
                        output += "Delay: " + delay + "\n";
                        if (links.length == 1) {
                            var nextNode = nodesMap[links[0].get('target').id];
                            setTimeout(function () { output += Factory.run(nextNode, graph, nodesMap, linksMap, env, timeline); }, delay);
                        }
                        else if (links.length > 1) {
                            output += "Error: too many links\n";
                        }
                    }
                }
                else {
                    output += "Error: " + parser.error + "\n";
                }
            }
        }
        return output;
    };
    return Timer;
})(Block);
//# sourceMappingURL=Timer.js.map