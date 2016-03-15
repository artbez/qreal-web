var RootDiagramController = (function () {
    function RootDiagramController($scope, $compile) {
        $scope.root = this;
        this.realModel = new TrikRobotModelBase();
        this.robotModel = new TwoDRobotModel(this.realModel, "model");
        $scope.$on("timeline", function (event, timeline) { $scope.$broadcast("interpret", timeline); });
    }
    RootDiagramController.prototype.setRobotModel = function (robotModel) {
        this.robotModel = robotModel;
    };
    RootDiagramController.prototype.getRobotModel = function () {
        return this.robotModel;
    };
    return RootDiagramController;
})();
//# sourceMappingURL=RootDiagramController.js.map