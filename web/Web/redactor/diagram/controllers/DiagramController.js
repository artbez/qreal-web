var DiagramController = (function () {
    function DiagramController($scope, $compile) {
        this.graph = new joint.dia.Graph;
        this.paper = new DiagramPaper(this, this.graph);
        this.nodeTypesMap = {};
        this.nodesMap = {};
        this.linksMap = {};
        this.isPaletteLoaded = false;
        this.flagDraw = false;
        this.pointsList = [];
        this.date = new Date();
        var controller = this;
        $scope.vm = controller;
        PaletteLoader.loadElementsFromXml(this, "configs/elements.xml", $scope, $compile);
        DropdownListManager.addDropdownList("Link", "Guard", ["", "false", "iteration", "true"]);
        this.loadGestures();
        this.flagDraw = false;
        this.initPointerdownListener();
        this.initPointerMoveAndUpListener();
        this.initDeleteListener();
        this.initCustomContextMenu();
        $scope.$on("interpret", function (event, timeline) {
            //      console.log(InterpretManager.interpret(controller.graph, controller.nodesMap, controller.linksMap, timeline));
        });
    }
    DiagramController.prototype.initPalette = function () {
        this.setInputStringListener();
        this.setCheckboxListener();
        this.setDropdownListener();
        this.setSpinnerListener();
        this.initDragAndDrop();
        this.makeUnselectable(document.getElementById("diagramContent"));
        this.isPaletteLoaded = true;
    };
    DiagramController.prototype.setNodeTypesMap = function (nodeTypesMap) {
        this.nodeTypesMap = nodeTypesMap;
    };
    DiagramController.prototype.openTwoDModel = function () {
        $("#diagramContent").hide();
        $("#twoDModelContent").show();
    };
    DiagramController.prototype.createDefaultNode = function (type, x, y, properties, imagePath, id) {
        var node = new DefaultDiagramNode(type, x, y, properties, imagePath, id);
        this.nodesMap[node.getJointObject().id] = node;
        this.graph.addCell(node.getJointObject());
        return node;
    };
    DiagramController.prototype.createNode = function (type, x, y) {
        var image = this.nodeTypesMap[type].image;
        var typeProperties = this.nodeTypesMap[type].properties;
        var nodeProperties = {};
        for (var property in typeProperties) {
            nodeProperties[property] = new Property(typeProperties[property].value, typeProperties[property].type);
        }
        var leftElementPos = x - $(this.diagramPaper).offset().left + $(this.diagramPaper).scrollLeft();
        var topElementPos = y - $(this.diagramPaper).offset().top + $(this.diagramPaper).scrollTop();
        var gridSize = this.paper.getGridSizeValue();
        leftElementPos -= leftElementPos % gridSize;
        topElementPos -= topElementPos % gridSize;
        var node = this.createDefaultNode(type, leftElementPos, topElementPos, nodeProperties, image);
        this.currentElement = node;
        this.setNodeProperties(node);
    };
    DiagramController.prototype.removeCurrentElement = function () {
        var controller = this;
        if (this.currentElement) {
            var node = this.nodesMap[this.currentElement.getJointObject().id];
            if (node) {
                var links = this.graph.getConnectedLinks(node.getJointObject(), { inbound: true, outbound: true });
                links.forEach(function (link) {
                    delete controller.linksMap[link.id];
                });
                delete this.nodesMap[this.currentElement.getJointObject().id];
            }
            else {
                var link = this.linksMap[this.currentElement.getJointObject().id];
                if (link) {
                    delete this.linksMap[this.currentElement.getJointObject().id];
                }
            }
            this.currentElement.getJointObject().remove();
            $(".property").remove();
            this.currentElement = undefined;
        }
    };
    DiagramController.prototype.initDragAndDrop = function () {
        var controller = this;
        $(".tree_element").draggable({
            helper: function () {
                var clone = $(this).find('.elementImg').clone();
                clone.css('position', 'fixed');
                clone.css('z-index', '1000');
                return clone;
            },
            revert: "invalid"
        });
        $("#diagram_paper").droppable({
            drop: function (event, ui) {
                var topElementPos = ui.offset.top - $(this).offset().top + $(this).scrollTop();
                var leftElementPos = ui.offset.left - $(this).offset().left + $(this).scrollLeft();
                var gridSize = controller.paper.getGridSizeValue();
                topElementPos -= topElementPos % gridSize;
                leftElementPos -= leftElementPos % gridSize;
                var type = $(ui.draggable.context).text();
                var image = controller.nodeTypesMap[type].image;
                var typeProperties = controller.nodeTypesMap[type].properties;
                var nodeProperties = {};
                for (var property in typeProperties) {
                    nodeProperties[property] = new Property(typeProperties[property].value, typeProperties[property].type);
                }
                var node = controller.createDefaultNode(type, leftElementPos, topElementPos, nodeProperties, image);
                controller.currentElement = node;
                controller.setNodeProperties(node);
            }
        });
    };
    DiagramController.prototype.initPointerdownListener = function () {
        var controller = this;
        this.paper.on('cell:pointerdown', function (cellView, event, x, y) {
            controller.clickFlag = true;
            controller.rightClickFlag = false;
            var node = controller.nodesMap[cellView.model.id];
            if (node) {
                controller.currentElement = node;
                controller.setNodeProperties(node);
                if (event.button == 2) {
                    controller.startDrawing();
                    controller.rightClickFlag = true;
                }
            }
            else {
                var link = controller.linksMap[cellView.model.id];
                if (link) {
                    controller.currentElement = link;
                    controller.setNodeProperties(link);
                }
                else {
                    controller.currentElement = undefined;
                }
            }
        });
        this.paper.on('blank:pointerdown', function (evt, x, y) {
            var n = controller.date.getTime();
            controller.currentTime = n;
            controller.flagAdd = false;
            clearTimeout(controller.timer);
            controller.flagDraw = true;
            if (evt.button == 2)
                controller.startDrawing();
            $(".property").remove();
            controller.currentElement = undefined;
        });
        this.diagramPaper = document.getElementById('diagram_paper');
        this.onMouseUp = controller.onMouseUp.bind(this);
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.onMouseUp = controller.onMouseMove.bind(this);
        this.diagramPaper.addEventListener('mousemove', this.onMouseMove.bind(this));
    };
    DiagramController.prototype.initPointerMoveAndUpListener = function () {
        var controller = this;
        this.paper.on('cell:pointermove', function (cellView, event, x, y) {
            controller.clickFlag = false;
        });
        this.paper.on('cell:pointerup', function (cellView, event, x, y) {
            if (!($(event.target).parents(".custom-menu").length > 0)) {
                $(".custom-menu").hide(100);
            }
            if ((controller.clickFlag) && (event.button == 2)) {
                console.log("right-click");
                $(".custom-menu").finish().toggle(100).
                    css({
                    top: event.pageY + "px",
                    left: event.pageX + "px"
                });
            }
        });
        this.graph.on('change:position', function (cell) {
            if (!controller.rightClickFlag)
                return;
            cell.set('position', cell.previous('position'));
        });
    };
    DiagramController.prototype.startDrawing = function () {
        var n = this.date.getTime();
        this.currentTime = n;
        this.flagAdd = false;
        clearTimeout(this.timer);
        this.flagDraw = true;
    };
    DiagramController.prototype.smoothing = function (pair1, pair2, diff) {
        var a = 1;
        var c = 0.0275; // 'a' and 'c' are empirical constants
        var b = Math.exp(-c * diff);
        return new utils.Pair(pair2.first * b + (1 - b) * pair1.first, pair2.second + (1 - b) * pair1.second);
    };
    DiagramController.prototype.onMouseMove = function (e) {
        if (!(event.button == 2))
            return;
        if (this.flagDraw === false)
            return;
        var pair = new utils.Pair(e.pageX, e.pageY);
        if (this.flagAdd) {
            var currentPair = this.pointsList[this.pointsList.length - 1];
            var n = this.date.getTime();
            var diff = n - this.currentTime;
            this.currentTime = n;
            pair = this.smoothing(currentPair, new utils.Pair(e.pageX, e.pageY), diff);
            $('#diagram_paper').line(currentPair.first, currentPair.second, pair.first, pair.second);
        }
        this.flagAdd = true;
        this.pointsList.push(pair);
    };
    DiagramController.prototype.onMouseUp = function (e) {
        var _this = this;
        if (this.flagDraw === false)
            return;
        this.mouseupEvent = e;
        this.flagDraw = false;
        this.timer = setTimeout(function () { return _this.finishDraw(e); }, 1000);
    };
    DiagramController.prototype.finishDraw = function (e) {
        if (this.flagDraw === true)
            return;
        var pencil = document.getElementsByClassName('pencil');
        for (var i = pencil.length; i > 0; i--) {
            pencil[i - 1].parentNode.removeChild(pencil[i - 1]);
        }
        var controller = this;
        if (this.currentElement != undefined) {
            var elementBelow = this.graph.get('cells').find(function (cell) {
                if (cell instanceof joint.dia.Link)
                    return false; // Not interested in links.
                if (cell.id === controller.currentElement.getJointObject().id)
                    return false; // The same element as the dropped one.
                var mXBegin = cell.getBBox().origin().x;
                var mYBegin = cell.getBBox().origin().y;
                var mXEnd = cell.getBBox().corner().x;
                var mYEnd = cell.getBBox().corner().y;
                var leftElementPos = e.pageX - $(controller.diagramPaper).offset().left + $(controller.diagramPaper).scrollLeft();
                var topElementPos = e.pageY - $(controller.diagramPaper).offset().top + $(controller.diagramPaper).scrollTop();
                if ((mXBegin <= leftElementPos) && (mXEnd >= leftElementPos)
                    && (mYBegin <= topElementPos) && (mYEnd >= topElementPos) && (controller.rightClickFlag))
                    return true;
                return false;
            });
            if (elementBelow) {
                var link = new joint.dia.Link({
                    source: { id: elementBelow.id }, target: { id: this.currentElement.getJointObject().id },
                    attrs: { '.marker-source': { d: 'M 10 0 L 0 5 L 10 10 z' } } });
                var linkObject = new Link(link);
                controller.addLink(link.id, linkObject);
                this.graph.addCell(link);
            }
        }
        else {
            var keyG = new KeyGiver(this);
            keyG.isGesture();
        }
        this.pointsList = [];
    };
    DiagramController.prototype.initCustomContextMenu = function () {
        var controller = this;
        $("#diagramContent").bind("contextmenu", function (event) {
            event.preventDefault();
        });
        $(".custom-menu li").click(function () {
            switch ($(this).attr("data-action")) {
                case "delete":
                    controller.removeCurrentElement();
                    break;
            }
            $(".custom-menu").hide(100);
        });
    };
    DiagramController.prototype.initDeleteListener = function () {
        var controller = this;
        var deleteKey = 46;
        $('html').keyup(function (e) {
            if (e.keyCode == deleteKey) {
                controller.removeCurrentElement();
            }
        });
    };
    DiagramController.prototype.setInputStringListener = function () {
        var controller = this;
        $(document).on('change', '.form-control', function () {
            var tr = $(this).closest('tr');
            var name = tr.find('td:first').html();
            var value = $(this).val();
            var property = controller.currentElement.getProperties()[name];
            property.value = value;
            controller.currentElement.setProperty(name, property);
        });
    };
    DiagramController.prototype.setCheckboxListener = function () {
        var controller = this;
        $(document).on('change', '.checkbox', function () {
            var tr = $(this).closest('tr');
            var name = tr.find('td:first').html();
            var label = tr.find('label');
            var value = label.contents().last()[0].textContent;
            if (value === "True") {
                value = "False";
                label.contents().last()[0].textContent = value;
            }
            else {
                value = "True";
                label.contents().last()[0].textContent = value;
            }
            var property = controller.currentElement.getProperties()[name];
            property.value = value;
            controller.currentElement.setProperty(name, property);
        });
    };
    DiagramController.prototype.setDropdownListener = function () {
        var controller = this;
        $(document).on('change', '.mydropdown', function () {
            var tr = $(this).closest('tr');
            var name = tr.find('td:first').html();
            var value = $(this).val();
            var property = controller.currentElement.getProperties()[name];
            property.value = value;
            controller.currentElement.setProperty(name, property);
        });
    };
    DiagramController.prototype.setSpinnerListener = function () {
        var controller = this;
        $(document).on('change', '.spinner', function () {
            var tr = $(this).closest('tr');
            var name = tr.find('td:first').html();
            var value = $(this).val();
            if (value !== "" && !isNaN(value)) {
                var property = controller.currentElement.getProperties()[name];
                property.value = value;
                controller.currentElement.setProperty(name, property);
            }
        });
    };
    DiagramController.prototype.setNodeProperties = function (element) {
        var properties = element.getProperties();
        var content = '';
        for (var property in properties) {
            content += this.getPropertyHtml(element.getType(), property, properties[property]);
        }
        $('#property_table tbody').html(content);
    };
    DiagramController.prototype.getPropertyHtml = function (typeName, propertyName, property) {
        return PropertyManager.getPropertyHtml(typeName, propertyName, property);
    };
    DiagramController.prototype.addLink = function (linkId, linkObject) {
        this.linksMap[linkId] = linkObject;
    };
    DiagramController.prototype.clear = function () {
        this.graph.clear();
        this.nodesMap = {};
        this.linksMap = {};
        $(".property").remove();
        this.currentElement = undefined;
    };
    DiagramController.prototype.saveDiagram = function () {
        if (!this.isPaletteLoaded) {
            alert("Palette is not loaded!");
            return;
        }
        var name = prompt("input name");
        var dia = Exporter.export(name, this.nodesMap, this.linksMap);
        var transport = new Thrift.Transport("http://localhost:8080/DiagramServlet");
        var protocol = new Thrift.Protocol(transport);
        var client = new DiagramServiceClient(protocol);
        try {
            var result = client.save(dia);
        }
        catch (ouch) {
        }
    };
    DiagramController.prototype.openDiagram = function () {
        if (!this.isPaletteLoaded) {
            alert("Palette is not loaded!");
            return;
        }
        var controller = this;
        var name = prompt("input diagram name");
        var transport = new Thrift.Transport("http://localhost:8080/DiagramServlet");
        var protocol = new Thrift.Protocol(transport);
        var client = new DiagramServiceClient(protocol);
        try {
            var dia = client.open(name);
            Importer.import(dia, controller.graph, controller.nodesMap, controller.linksMap, controller.nodeTypesMap);
        }
        catch (ouch) {
        }
    };
    DiagramController.prototype.makeUnselectable = function (element) {
        if (element.nodeType == 1) {
            element.setAttribute("unselectable", "on");
        }
        var child = element.firstChild;
        while (child) {
            this.makeUnselectable(child);
            child = child.nextSibling;
        }
    };
    // download file with gestures
    DiagramController.prototype.downloadData = function (url, success) {
        var xhr = XmlHttpFactory.createXMLHTTPObject();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    success(xhr);
                }
            }
        };
        xhr.send();
    };
    DiagramController.prototype.loadGestures = function () {
        var url = "resources/gestures.json";
        this.downloadData(url, this.processGestures.bind(this));
    };
    DiagramController.prototype.processGestures = function (xhr) {
        var fileData = JSON.parse(xhr.responseText);
        this.data = [];
        for (var i = 0; i < fileData.length; i++)
            this.data[i] = new Gesture(fileData[i].name, fileData[i].key, fileData[i].factor);
    };
    DiagramController.prototype.getGestureList = function () {
        return this.pointsList;
    };
    DiagramController.prototype.getGestureData = function () {
        return this.data;
    };
    DiagramController.prototype.getMouseupEvent = function () {
        return this.mouseupEvent;
    };
    return DiagramController;
})();
//# sourceMappingURL=DiagramController.js.map