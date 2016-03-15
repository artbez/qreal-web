var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Motors = (function (_super) {
    __extends(Motors, _super);
    function Motors() {
        _super.apply(this, arguments);
    }
    Motors.run = function (node, graph, nodesMap, linksMap, forward, env, timeline) {
        var output = "Motors forward/backward" + "\n";
        var ports = [];
        var power = 0;
        var nodeId = InterpretManager.getIdByNode(node, nodesMap);
        var links = InterpretManager.getOutboundLinks(graph, nodeId);
        var properties = node.getProperties();
        for (var p in properties) {
            if (p == "Ports") {
                ports = properties[p].value.replace(/ /g, '').split(",");
            }
            if (p == "Power (%)") {
                var parser = new Parser(properties[p].value, env);
                parser.parseExpression();
                if (parser.error == null) {
                    power = parser.result;
                    if (power < 0 || power > 100) {
                        output += "Error: incorrect power value";
                    }
                    else {
                        output += "Ports: " + ports + "\n" + "Power: " + power + "\n";
                        power = (forward) ? power : -power;
                        var models = timeline.getRobotModels();
                        var model = models[0];
                        if (ports.length == 1) {
                            if (ports[0] == "M3") {
                                model.setMotor1(power);
                            }
                            else if (ports[0] == "M4") {
                                model.setMotor2(power);
                            }
                            else {
                                output += "Error: Incorrect port name";
                            }
                        }
                        else if (ports.length == 2) {
                            if (ports[0] == "M3" && ports[1] == "M4" || ports[0] == "M4" && ports[1] == "M3") {
                                model.setMotor1(power);
                                model.setMotor2(power);
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
                    }
                }
                else {
                    output += "Error: " + parser.error + "\n";
                }
            }
        }
        return output;
    };
    return Motors;
})(Block);
//# sourceMappingURL=Motors.js.map