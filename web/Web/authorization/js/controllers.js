'use strict';


/* Controllers */
angular.module('myApp.controllers', []).
  controller('echoServiceController', ['$scope', 'loginClient', function($scope, loginClient) {
	  $scope.username = {text : "Hello"};
	  $scope.output = {text : "lal"};


	  var pair = new User();
	  pair.login = "123";
	  pair.password = "123";

	  $scope.mlogin = function() {
		    loginClient.login(pair).then(function(message){
				var tt = message;
				if(!$scope.$$phase) {
					$scope.$apply();
				}
			});
      };
 }])
		.controller('testController', ['$scope', function($scope, $location) {
			this.$location = $location;
		}]);
