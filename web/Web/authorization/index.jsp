<%@ include file="../include/include.jsp" %>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="myApp" class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>My AngularJS App</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bower_components/html5-boilerplate/dist/css/normalize.css">
  <link rel="stylesheet" href="bower_components/html5-boilerplate/dist/css/main.css">
  <script src="bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js"></script>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <title>Login</title>
  <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="css/login.css"/>
  <link rel="stylesheet" href="css/error.css"/>
</head>
<body ng-app="myApp" ng-controller="echoServiceController" class="container">
<!--
<h3>Simple Echo Service to Demo Thrift JS Client Integration with Angular</h3>
Input: <input type="text" name="input" ng-model="input.text"><input type="submit" value="echo" ng-click="echo()"><br>
<br/>
Output: <label>{{output.text}}</label>
-->
<%@include file="../include/navbar.jsp"%>

<form class="form-signin" name="input">

  <h1 class="form-signin-heading">Sign In</h1>

  <input type="text" class="form-control" name='username' placeholder="echo.User name" required="" autofocus="" ng-model="username.text">
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