'use strict';


/* Controllers */
angular.module('myApp.controllers', []).
  controller('echoServiceController', ['$scope', 'loginClient', function($scope, loginClient) {
	  $scope.username = {text : "Login"};
	  $scope.password = {text : "Password"};

	  $scope.mlogin = function() {
		  var pair = new User();
		  pair.login = "123";
		  pair.password = "123";
		  pair.id = 1;
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
