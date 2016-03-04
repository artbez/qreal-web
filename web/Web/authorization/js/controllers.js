'use strict';


/* Controllers */
angular.module('myApp.controllers', []).
  controller('echoServiceController', ['$scope', 'loginClient', '$window', function($scope, loginClient, $window) {
	  $scope.username = {text : "Login"};
	  $scope.password = {text : "Password"};

	  $scope.mlogin = function() {
		  var pair = new User();
		  pair.login = $scope.username.text;
		  pair.password = $scope.password.text;
		    loginClient.login(pair).then(function(message){
				var tt = message;
				if (tt) {
					$window.location.href = '#/view1';
				} else {
					$window.location.href = '#/view2';
				}
				if(!$scope.$$phase) {
					$scope.$apply();
				}
			});
      };
 }])
		.controller('testController', ['$scope', function($scope, $location) {
			this.$location = $location;
		}]);
