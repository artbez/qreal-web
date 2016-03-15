var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FinalBlock = (function (_super) {
    __extends(FinalBlock, _super);
    function FinalBlock() {
        _super.apply(this, arguments);
    }
    FinalBlock.run = function (node, graph, timeline) {
        var output = "Final" + "\n";
        timeline.stop();
        return output;
    };
    return FinalBlock;
})(Block);
//# sourceMappingURL=FinalBlock.js.map