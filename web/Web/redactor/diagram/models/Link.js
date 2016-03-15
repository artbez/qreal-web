var Link = (function () {
    function Link(jointObject, properties) {
        this.properties = {};
        this.type = "Link";
        this.jointObject = jointObject;
        if (properties) {
            this.properties = properties;
        }
        else {
            this.properties["Guard"] = new Property("", "dropdown");
        }
    }
    Link.prototype.getJointObject = function () {
        return this.jointObject;
    };
    Link.prototype.getType = function () {
        return this.type;
    };
    Link.prototype.getProperties = function () {
        return this.properties;
    };
    Link.prototype.setProperty = function (name, property) {
        this.properties[name] = property;
    };
    return Link;
})();
//# sourceMappingURL=Link.js.map