/**
 * Created by vladzx on 10.10.14.
 */
var DefaultDiagramNode2 = (function () {
    function DefaultDiagramNode2(type, x, y, properties, imagePath, id) {
        this.type = type;
        var jointObjectAttributes = {
            position: { x: x, y: y },
            size: { width: 50, height: 50 },
            outPorts: [''],
            attrs: {
                image: {
                    'xlink:href': imagePath
                }
            }
        };
        if (id) {
            jQuery.extend(jointObjectAttributes, { id: id });
        }
        this.jointObject = new joint.shapes.devs.ImageWithPorts(jointObjectAttributes);
        this.properties = properties;
        this.imagePath = imagePath;
    }
    DefaultDiagramNode2.prototype.getType = function () {
        return this.type;
    };
    DefaultDiagramNode2.prototype.getX = function () {
        return (this.jointObject.get("position"))['x'];
    };
    DefaultDiagramNode2.prototype.getY = function () {
        return (this.jointObject.get("position"))['y'];
    };
    DefaultDiagramNode2.prototype.getImagePath = function () {
        return this.imagePath;
    };
    DefaultDiagramNode2.prototype.getJointObject = function () {
        return this.jointObject;
    };
    DefaultDiagramNode2.prototype.setProperty = function (name, property) {
        this.properties[name] = property;
    };
    DefaultDiagramNode2.prototype.getProperties = function () {
        return this.properties;
    };
    return DefaultDiagramNode2;
})();
//# sourceMappingURL=DefaultDiagramNode2.js.map