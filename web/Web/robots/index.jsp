<%@ include file="../include/include.jsp" %>

<html lang="en">
<head>
    <title>Robots Diagram</title>
    <script src="<c:url value='../../resources/js/jquery-1.11.0.min.js' />"></script>
    <jsp:include page="../include/scripts.jsp"/>
    <link rel="stylesheet" href="<c:url value='../../resources/css/error.css'/>"/>
    <script src="<c:url value='../../resources/js/map.js' />"></script>
    <script src="<c:url value='../../resources/js/robot.js' />"></script>

    <script type="text/javascript">
        $(document).ready(function () {
        });
    </script>
    <style>
        .dropdown-submenu {
            position: relative;
        }

        .dropdown-submenu > .dropdown-menu {
            top: 0;
            left: 100%;
            margin-top: -6px;
            margin-left: -1px;
            -webkit-border-radius: 0 6px 6px 6px;
            -moz-border-radius: 0 6px 6px;
            border-radius: 0 6px 6px 6px;
        }

        .dropdown-submenu:hover > .dropdown-menu {
            display: block;
        }

        .dropdown-submenu > a:after {
            display: block;
            content: " ";
            float: right;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            border-width: 5px 0 5px 5px;
            border-left-color: #ccc;
            margin-top: 5px;
            margin-right: -10px;
        }

        .dropdown-submenu:hover > a:after {
            border-left-color: #fff;
        }

        .dropdown-submenu.pull-left {
            float: none;
        }

        .dropdown-submenu.pull-left > .dropdown-menu {
            left: -100%;
            margin-left: 10px;
            -webkit-border-radius: 6px 0 6px 6px;
            -moz-border-radius: 6px 0 6px 6px;
            border-radius: 6px 0 6px 6px;
        }
    </style>
    <link rel="stylesheet" href="<c:url value='/resources/bootstrap/css/bootstrap.min.css' />"/>

</head>

<body>
<%@ include file="../include/navbar.jsp" %>


<!-- Main -->

<div class="container-fluid">


    <!-- upper section -->
    <div class="row">
        <div class="col-sm-3">
            <!-- left -->
            <h3><i class="glyphicon glyphicon-briefcase"></i> Toolbox</h3>
            <hr>

            <ul class="nav nav-stacked ">
                <li class="active"><a href="#robots" data-toggle="tab"><i class="glyphicon glyphicon-flash"></i> My
                    robots</a></li>
                <li><a href="#diagrams" data-toggle="tab"><i class="glyphicon glyphicon-link"></i> My
                    Diagrams</a></li>
                <li><a href="#map" data-toggle="tab"><i class="glyphicon glyphicon-list-alt"></i> Map</a>
                </li>
                <li><a href="#settings" data-toggle="tab"><i class="glyphicon glyphicon-book"></i>
                    Settings</a></li>
            </ul>

            <hr>

        </div>


        <div class="col-sm-9">


            <h3><i class="glyphicon glyphicon-dashboard"></i> Dashboard</h3>


            <hr>

            <div id="myTabContent" class="tab-content">
                <div class="tab-pane active in" id="robots">


                    <div class="row">
                       <!-- center left-->


                        <div class="col-md-6 ">
                            <div style="padding-top:2.8%;">


                                <a href="#" class="btn btn-info" data-toggle="modal" data-target="#myModal">
                                    <i class="glyphicon glyphicon-plus"></i><br/>
                                    Register robot
                                </a>

                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog"
                                     aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal"
                                                        aria-label="Close"><span aria-hidden="true">&times;</span>
                                                </button>
                                                <h4 class="modal-title" id="myModalLabel">Register new robot</h4>
                                            </div>
                                            <div class="modal-body">
                                                <div id="registerError" class="error" hidden></div>
                                                <form class="form form-vertical">
                                                    <div class="control-group">
                                                        <label>Name</label>

                                                        <div class="controls">
                                                            <input id="robotName" type="text" class="form-control"
                                                                   placeholder="Enter Name">
                                                        </div>
                                                    </div>
                                                    <br/>

                                                    <div class="control-group">
                                                        <label>Robot ssid</label>

                                                        <div class="controls">
                                                            <input id="ssid" type="password" class="form-control"
                                                                   placeholder="ssid">

                                                        </div>
                                                    </div>
                                                    <br/>

                                                </form>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="button" id="registerRobot" class="btn btn-primary">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="tab-pane" id="map">

                    <div id="yamap" style="width: 100%; height: 600px"></div>
                    <button id="target">ADD LABEL</button>

                </div>
                <div class="tab-pane" id="settings">
                    <div class="col-md-8">
                        <div class="container-fluid">
                            <div class="row text-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/row-->

        </div>
    </div>


</div>

</body>

</html>
