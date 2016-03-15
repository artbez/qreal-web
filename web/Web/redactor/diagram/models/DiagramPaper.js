var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DiagramPaper = (function (_super) {
    __extends(DiagramPaper, _super);
    function DiagramPaper(controller, graph) {
        this.controller = controller;
        this.gridSizeValue = 25;
        _super.call(this, {
            el: $('#diagram_paper'),
            width: $('#diagram_paper').width(),
            height: $('#diagram_paper').height(),
            model: graph,
            gridSize: this.gridSizeValue,
            defaultLink: new joint.dia.Link({
                attrs: {
                    '.connection': { stroke: 'black' },
                    '.marker-target': { fill: 'black', d: 'M 10 0 L 0 5 L 10 10 z' }
                }
            }),
            validateConnection: function (cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
                return (!(magnetT && magnetT.getAttribute('type') === 'output') && !(cellViewT && cellViewT.model.get('type') === 'link'));
            },
            validateMagnet: function (cellView, magnet) {
                return magnet.getAttribute('magnet') !== 'passive';
            },
            diagramElementView: joint.dia.ElementView.extend(this.getDiagramElementView())
        });
    }
    DiagramPaper.prototype.getGridSizeValue = function () {
        return this.gridSizeValue;
    };
    DiagramPaper.prototype.getDiagramElementView = function () {
        var controller = this.controller;
        return jQuery.extend(joint.shapes.basic.PortsViewInterface, {
            pointerdown: function (evt, x, y) {
                if (evt.target.getAttribute('magnet') &&
                    this.paper.options.validateMagnet.call(this.paper, this, evt.target)) {
                    this.model.trigger('batch:start');
                    var link = this.paper.getDefaultLink(this, evt.target);
                    if (evt.target.tagName === "circle") {
                        link.set({
                            source: {
                                id: this.model.id
                            },
                            target: { x: x, y: y }
                        });
                    }
                    else {
                        link.set({
                            source: {
                                id: this.model.id,
                                selector: this.getSelector(evt.target),
                                port: $(evt.target).attr('port')
                            },
                            target: { x: x, y: y }
                        });
                    }
                    var linkObject = new Link(link);
                    controller.addLink(link.id, linkObject);
                    this.paper.model.addCell(link);
                    this._linkView = this.paper.findViewByModel(link);
                    this._linkView.startArrowheadMove('target');
                }
                else {
                    this._dx = x;
                    this._dy = y;
                    joint.dia.CellView.prototype.pointerdown.apply(this, arguments);
                }
            }
        });
    };
    return DiagramPaper;
})(joint.dia.Paper);
//# sourceMappingURL=DiagramPaper.js.map