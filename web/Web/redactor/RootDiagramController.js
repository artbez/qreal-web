var RootDiagramController = (function () {
    function RootDiagramController($scope, $compile) {
        $scope.root = this;
        $scope.$on("timeline", function (event, timeline) { $scope.$broadcast("interpret", timeline); });
    }
    return RootDiagramController;
})();
//# sourceMappingURL=RootDiagramController.js.map