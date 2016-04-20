    class RootDiagramController {

    constructor($scope, $compile) {
        $scope.root = this;
        
        $scope.$on("timeline", function(event, timeline) { $scope.$broadcast("interpret", timeline); });
    }
}