var Factory = (function () {
    function Factory() {
    }
    Factory.run = function (node, graph, nodesMap, linksMap, env, timeline) {
        var output = "";
        switch (node.type) {
            case "Initial Node":
                output += InitialBlock.run(node, graph, nodesMap, linksMap, env, timeline);
                break;
            case "Final Node":
                output += FinalBlock.run(node, graph, timeline);
                break;
            case "Condition":
                output += IfBlock.run(node, graph, nodesMap, linksMap, env, timeline);
                break;
            case "Function":
                output += FunctionBlock.run(node, graph, nodesMap, linksMap, env, timeline);
                break;
            case "Motors Forward":
                output += Motors.run(node, graph, nodesMap, linksMap, true, env, timeline);
                break;
            case "Motors Backward":
                output += Motors.run(node, graph, nodesMap, linksMap, false, env, timeline);
                break;
            case "Stop Motors":
                output += MotorsStop.run(node, graph, nodesMap, linksMap, env, timeline);
                break;
            case "Timer":
                output += Timer.run(node, graph, nodesMap, linksMap, env, timeline);
                break;
            default:
                output += "Not yet";
        }
        return output;
    };
    return Factory;
})();
//# sourceMappingURL=Factory.js.map