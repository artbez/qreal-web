'use strict';

/* Services */
angular.module('myApp.services', []).
factory('loginClient',function($window, $q) {
    var loginClient;
    loginClient = $window.LoginClient;
    return {
        login: function(message) {
        	var defered = $q.defer();
            var result;
            var user = new $window.User();
            user.login = message.login;
            user.password = message.password;
            result = loginClient.login(user);
        	defered.resolve(result);
        	
            return defered.promise;
        }
    };
  return loginClient;
});
