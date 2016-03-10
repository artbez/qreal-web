<%--
  Created by IntelliJ IDEA.
  User: artemiibezguzikov
  Date: 10.03.16
  Time: 0:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Services</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <div class="jumbotron">
    <h1>List of Services</h1>
    <p>Here you can choose services to test</p>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <h3> <a href="Web/authorization/index.jsp"> Registration Service </a> </h3>
      <p>Here you can log in</p>
      <p>It sends request to loginServlet, which checks database</p>
    </div>
    <div class="col-sm-6">
      <h3><a href = 'Web/robots/index.jsp'> Dashboard Service </a></h3>
      <p>Here you can register new robots and see which ase exist</p>
      <p>Now it is not completed</p>
    </div>
  </div>
</div>

</body>
</html>
