<%@ include file="../include/include.jsp" %>

<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Login</title>
  <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="css/login.css"/>
  <link rel="stylesheet" href="css/error.css"/>
</head>
<body ng-app="myApp" ng-controller="echoServiceController" class="container">

<%@include file="../include/navbar.jsp"%>

<form class="form-signin" name="input">

  <h1 class="form-signin-heading">Sign In</h1>

  <input type="text" class="form-control" name='username' placeholder="user.thriftgen.User name" required="" autofocus="" ng-model="username.text">
  <input type="password" class="form-control" name='password' placeholder="Password" required="" ng-model="password.text">
  <button class="btn btn-lg btn-primary btn-block" type="submit" value="mlogin" ng-click="mlogin()">
    Sign In
  </button>
  <a class="pull-right">Sign up here!</a>
</form>

<div ng-view></div>

<script src="lib/angular/angular.js"></script>
<script src="lib/angular/angular-route.js"></script>
<script src="js/app.js"></script>
<script src="js/services.js"></script>
<script src="js/controllers.js"></script>
<script src="js/filters.js"></script>
<script src="js/directives.js"></script>

<script src="gen-js/thrift.js"></script>
<script src="gen-js/Service_types.js"></script>
<script src="gen-js/loginService.js"></script>
<script src="gen-js/loginClient.js"></script>

</body>
</html>