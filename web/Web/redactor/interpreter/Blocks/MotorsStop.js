var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MotorsStop = (function (_super) {
    __extends(MotorsStop, _super);
    function MotorsStop() {
        _super.apply(this, arguments);
    }
    MotorsStop.run = function (node, graph, nodesMap, linksMap, env, timeline) {
        var output = "Motors stop" + "\n";
        var ports = [];
        var nodeId = InterpretManager.getIdByNode(node, nodesMap);
        var links = InterpretManager.getOutboundLinks(graph, nodeId);
        var properties = node.getProperties();
        for (var p in properties) {
            if (p == "Ports") {
                ports += properties[p].value.replace(/ /g, '').split(",");
            }
        }
        output += "Ports: " + ports + "\n";
        var models = timeline.getRobotModels();
        var model = models[0];
        if (ports.length == 1) {
            if (ports[0] == "M3") {
                model.setMotor1(0);
            }
            else if (ports[0] == "M4") {
                model.setMotor2(0);
            }
            else {
                output += "Error: Incorrect port name";
            }
        }
        else if (ports.length == 2) {
            if (ports[0] == "M3" && ports[1] == "M4" || ports[0] == "M4" && ports[1] == "M3") {
                model.setMotor1(0);
                model.setMotor2(0);
            }
            else {
                output += "Error: Incorrect port names";
            }
        }
        else {
            output += "Error: Incorrect number of ports";
        }
        if (links.length == 1) {
            var nextNode = nodesMap[links[0].get('target').id];
            output += Factory.run(nextNode, graph, nodesMap, linksMap, env, timeline);
        }
        else if (links.length > 1) {
            output += "Error: too many links\n";
        }
        return output;
    };
    return MotorsStop;
})(Block);
//# sourceMappingURL=MotorsStop.js.map