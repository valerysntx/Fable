define(["exports", "fable-core", "./fable_external/Fable.Helpers.Virtualdom-1273792215"], function (exports, _fableCore, _FableHelpers) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.todoApp = exports.initModel = exports.initList = exports.Storage = exports.todoView = exports.todoMain = exports.itemList = exports.listItem = exports.todoHeader = exports.todoFooter = exports.filters = exports.filter = exports.filterToTextAndUrl = exports.todoUpdate = exports.TodoAction = exports.TodoModel = exports.Item = exports.Filter = exports.counterApp = exports.counterView = exports.counterUpdate = exports.fakeAjaxCall = exports.CounterAction = exports.initCounter = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var initCounter = exports.initCounter = 0;

    var CounterAction = exports.CounterAction = function CounterAction(caseName, fieldsLength) {
        _classCallCheck(this, CounterAction);

        this.Case = caseName;
        this.Fields = [];

        for (var i = 0; i < fieldsLength; i++) {
            this.Fields[i] = arguments[i + 2];
        }
    };

    _fableCore.Util.setInterfaces(CounterAction.prototype, [], "Virtualdom.CounterAction");

    var fakeAjaxCall = exports.fakeAjaxCall = function (model, h) {
        var message = model < 30 ? new CounterAction("Increment", 1, 10) : new CounterAction("Decrement", 1, 5);

        if (model > 30 ? model < 60 : false) {} else {
            window.setTimeout(function (_arg1) {
                return h(message);
            }, 2000);
        }
    };

    var counterUpdate = exports.counterUpdate = function (model, action) {
        return function (m) {
            return [m, new _fableCore.List(), _fableCore.List.ofArray([function (h) {
                fakeAjaxCall(model, h);
            }])];
        }(action.Case === "Increment" ? function () {
            var x = action.Fields[0];
            return model + x;
        }() : function () {
            var x = action.Fields[0];
            return model - x;
        }());
    };

    var counterView = exports.counterView = function (model) {
        var bgColor = function () {
            var x = model;
            return x > 10;
        }() ? function () {
            var x = model;
            return "red";
        }() : function () {
            var x = model;
            return x < 0;
        }() ? function () {
            var x = model;
            return "blue";
        }() : "green";
        return function () {
            var tagName = "div";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, new _fableCore.List()], children);
            };
        }()(_fableCore.List.ofArray([function () {
            var tagName = "div";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Style", 1, _fableCore.List.ofArray([["width", "120px"], ["height", "120px"]]))])], children);
            };
        }()(_fableCore.List.ofArray([function () {
            var tagName = "svg";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([_FableHelpers.Html.Svg.svgNS()], _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["width", "120"]), new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["height", "120"]), new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["viewBox", "0 0 100 100"])]))], children);
            };
        }()(_fableCore.List.ofArray([function () {
            var tagName = "rect";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([_FableHelpers.Html.Svg.svgNS()], _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["width", "110"]), new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["height", "110"]), new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["fill", bgColor])]))], children);
            };
        }()(new _fableCore.List())]))])), function () {
            var tagName = "div";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Style", 1, _fableCore.List.ofArray([["border", "1px solid blue"]])), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["onclick", function (x) {
                    return new CounterAction("Increment", 1, 1);
                }])), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["ondblclick", function (x) {
                    return new CounterAction("Increment", 1, 10);
                }]))])], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("Text", 1, "Increment")])), function () {
            var tagName = "div";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Style", 1, _fableCore.List.ofArray([["background-color", bgColor], ["color", "white"]]))])], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("Text", 1, model.toString())])), function () {
            var tagName = "div";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Style", 1, _fableCore.List.ofArray([["border", "1px solid green"], ["height", (7 + model).toString() + "px"]])), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["onclick", function (x) {
                    return new CounterAction("Decrement", 1, 1);
                }])), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["ondblclick", function (x) {
                    return new CounterAction("Decrement", 1, 5);
                }]))])], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("Text", 1, "Decrement")]))]));
    };

    var counterApp = exports.counterApp = _FableHelpers.App.withStartNode("#counter", _FableHelpers.App.withInit(function (h) {
        fakeAjaxCall(initCounter, h);
    }, _FableHelpers.App.createApp(new _FableHelpers.App.AppState(initCounter, function (model) {
        return counterView(model);
    }, function (model) {
        return function (action) {
            return counterUpdate(model, action);
        };
    }))));

    _FableHelpers.App.start((0, _FableHelpers.renderer)(), counterApp);

    var Filter = exports.Filter = function Filter(caseName, fieldsLength) {
        _classCallCheck(this, Filter);

        this.Case = caseName;
        this.Fields = [];

        for (var i = 0; i < fieldsLength; i++) {
            this.Fields[i] = arguments[i + 2];
        }
    };

    _fableCore.Util.setInterfaces(Filter.prototype, [], "Virtualdom.Filter");

    var Item = exports.Item = function Item($arg0, $arg1, $arg2, $arg3) {
        _classCallCheck(this, Item);

        this.Name = $arg0;
        this.Done = $arg1;
        this.Id = $arg2;
        this.IsEditing = $arg3;
    };

    _fableCore.Util.setInterfaces(Item.prototype, [], "Virtualdom.Item");

    var TodoModel = exports.TodoModel = function TodoModel($arg0, $arg1, $arg2) {
        _classCallCheck(this, TodoModel);

        this.Items = $arg0;
        this.Input = $arg1;
        this.Filter = $arg2;
    };

    _fableCore.Util.setInterfaces(TodoModel.prototype, [], "Virtualdom.TodoModel");

    var TodoAction = exports.TodoAction = function TodoAction(caseName, fieldsLength) {
        _classCallCheck(this, TodoAction);

        this.Case = caseName;
        this.Fields = [];

        for (var i = 0; i < fieldsLength; i++) {
            this.Fields[i] = arguments[i + 2];
        }
    };

    _fableCore.Util.setInterfaces(TodoAction.prototype, [], "Virtualdom.TodoAction");

    var todoUpdate = exports.todoUpdate = function (model, msg) {
        var updateItems = function (model_1) {
            return function (f) {
                var items_ = f(model_1.Items);
                return new TodoModel(items_, model_1.Input, model_1.Filter);
            };
        };

        var checkAllWith = function (v) {
            return updateItems(model)(function () {
                var mapping = function (i) {
                    return new Item(i.Name, v, i.Id, i.IsEditing);
                };

                return function (list) {
                    return _fableCore.List.map(mapping, list);
                };
            }());
        };

        var updateItem = function (i) {
            return function (model_1) {
                return updateItems(model_1)(function () {
                    var mapping = function (i_) {
                        return i_.Id !== i.Id ? i_ : i;
                    };

                    return function (list) {
                        return _fableCore.List.map(mapping, list);
                    };
                }());
            };
        };

        var model_ = msg.Case === "AddItem" ? function () {
            var maxId = model.Items.tail == null ? 1 : _fableCore.Seq.max(_fableCore.List.map(function (x) {
                return x.Id;
            }, model.Items));
            return updateItems(function () {
                var Input = "";
                return new TodoModel(model.Items, Input, model.Filter);
            }())(function (items) {
                return _fableCore.List.append(items, _fableCore.List.ofArray([function () {
                    var Id = maxId + 1;
                    return new Item(model.Input, false, Id, false);
                }()]));
            });
        }() : msg.Case === "ChangeInput" ? function () {
            var v = msg.Fields[0];
            return new TodoModel(model.Items, v, model.Filter);
        }() : msg.Case === "MarkAsDone" ? function () {
            var i = msg.Fields[0];
            return updateItem(function () {
                var Done = true;
                return new Item(i.Name, Done, i.Id, i.IsEditing);
            }())(model);
        }() : msg.Case === "CheckAll" ? checkAllWith(true) : msg.Case === "UnCheckAll" ? checkAllWith(false) : msg.Case === "Destroy" ? function () {
            var i = msg.Fields[0];
            return updateItems(model)(function () {
                var predicate = function (i_) {
                    return i_.Id !== i.Id;
                };

                return function (list) {
                    return _fableCore.List.filter(predicate, list);
                };
            }());
        }() : msg.Case === "ToggleItem" ? function () {
            var i = msg.Fields[0];
            return updateItem(function () {
                var Done = !i.Done;
                return new Item(i.Name, Done, i.Id, i.IsEditing);
            }())(model);
        }() : msg.Case === "SetActiveFilter" ? function () {
            var f = msg.Fields[0];
            return new TodoModel(model.Items, model.Input, f);
        }() : msg.Case === "ClearCompleted" ? updateItems(model)(function () {
            var predicate = function (i) {
                return !i.Done;
            };

            return function (list) {
                return _fableCore.List.filter(predicate, list);
            };
        }()) : msg.Case === "EditItem" ? function () {
            var i = msg.Fields[0];
            return updateItem(function () {
                var IsEditing = true;
                return new Item(i.Name, i.Done, i.Id, IsEditing);
            }())(model);
        }() : msg.Case === "SaveItem" ? function () {
            var str = msg.Fields[1];
            var i = msg.Fields[0];
            return updateItem(function () {
                var IsEditing = false;
                return new Item(str, i.Done, i.Id, IsEditing);
            }())(model);
        }() : model;
        var jsCalls = msg.Case === "EditItem" ? function () {
            var i = msg.Fields[0];
            return _fableCore.List.ofArray([function (unitVar0) {
                document.getElementById("item-" + i.Id.toString()).focus();
            }]);
        }() : new _fableCore.List();
        return [model_, jsCalls, new _fableCore.List()];
    };

    var filterToTextAndUrl = exports.filterToTextAndUrl = function (_arg1) {
        return _arg1.Case === "Completed" ? ["Completed", "completed"] : _arg1.Case === "Active" ? ["Active", "active"] : ["All", ""];
    };

    var filter = exports.filter = function (activeFilter, f) {
        var linkClass = _fableCore.Util.compareTo(f, activeFilter) === 0 ? "selected" : "";
        var patternInput = filterToTextAndUrl(f);
        var url = patternInput[1];
        var fText = patternInput[0];
        return function () {
            var tagName = "li";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["onclick", function (_arg1) {
                    return new TodoAction("SetActiveFilter", 1, f);
                }]))])], children);
            };
        }()(_fableCore.List.ofArray([function () {
            var tagName = "a";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["href", "#/" + url]), new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", linkClass])])], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("Text", 1, fText)]))]));
    };

    var filters = exports.filters = function (model) {
        return function () {
            var tagName = "ul";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "filters"])])], children);
            };
        }()(_fableCore.List.map(function () {
            var activeFilter = model.Filter;
            return function (f) {
                return filter(activeFilter, f);
            };
        }(), _fableCore.List.ofArray([new Filter("All", 0), new Filter("Active", 0), new Filter("Completed", 0)])));
    };

    var todoFooter = exports.todoFooter = function (model) {
        var clearVisibility = _fableCore.Seq.exists(function (i) {
            return i.Done;
        }, model.Items) ? "" : "none";

        var activeCount = _fableCore.List.filter(function (i) {
            return !i.Done;
        }, model.Items).length.toString();

        return function () {
            var tagName = "footer";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "footer"]), new _FableHelpers.Html.Types.Attribute("Style", 1, _fableCore.List.ofArray([["display", "block"]]))])], children);
            };
        }()(_fableCore.List.ofArray([function () {
            var tagName = "span";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "todo-count"])])], children);
            };
        }()(_fableCore.List.ofArray([function () {
            var tagName = "strong";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, new _fableCore.List()], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("Text", 1, activeCount)])), new _FableHelpers.Html.Types.Node("Text", 1, " items left")])), filters(model), function () {
            var tagName = "button";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "clear-completed"]), new _FableHelpers.Html.Types.Attribute("Style", 1, _fableCore.List.ofArray([["display", clearVisibility]])), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["onclick", function (_arg1) {
                    return new TodoAction("ClearCompleted", 0);
                }]))])], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("Text", 1, "Clear completed")]))]));
    };

    var todoHeader = exports.todoHeader = function (model) {
        return function () {
            var tagName = "header";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "header"])])], children);
            };
        }()(_fableCore.List.ofArray([function () {
            var tagName = "h1";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, new _fableCore.List()], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("Text", 1, "todos")])), new _FableHelpers.Html.Types.Node("VoidElement", 1, ["input", _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "new-todo"]), new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["id", "new-todo"]), new _FableHelpers.Html.Types.Attribute("Property", 1, ["value", model]), new _FableHelpers.Html.Types.Attribute("Property", 1, ["placeholder", "What needs to be done?"]), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("EventHandler", 1, ["oninput", function (e) {
            return function (x) {
                return new TodoAction("ChangeInput", 1, x);
            }(e.target.value);
        }])), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("KeyboardEventHandler", 1, ["onkeyup", function (x) {
            return x.keyCode === 13 ? new TodoAction("AddItem", 0) : new TodoAction("NoOp", 0);
        }]))])])]));
    };

    var listItem = exports.listItem = function (item) {
        var itemChecked = item.Done ? "true" : "";
        var editClass = item.IsEditing ? "editing" : "";
        return function () {
            var tagName = "li";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", (item.Done ? "completed " : " ") + editClass])])], children);
            };
        }()(_fableCore.List.ofArray([function () {
            var tagName = "div";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "view"]), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["ondblclick", function (x) {
                    return new TodoAction("EditItem", 1, item);
                }]))])], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("VoidElement", 1, ["input", _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Property", 1, ["className", "toggle"]), new _FableHelpers.Html.Types.Attribute("Property", 1, ["type", "checkbox"]), new _FableHelpers.Html.Types.Attribute("Property", 1, ["checked", itemChecked]), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["onclick", function (e) {
            return new TodoAction("ToggleItem", 1, item);
        }]))])]), function () {
            var tagName = "label";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, new _fableCore.List()], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("Text", 1, item.Name)])), function () {
            var tagName = "button";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "destroy"]), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["onclick", function (e) {
                    return new TodoAction("Destroy", 1, item);
                }]))])], children);
            };
        }()(new _fableCore.List())])), new _FableHelpers.Html.Types.Node("VoidElement", 1, ["input", _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "edit"]), new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["value", item.Name]), new _FableHelpers.Html.Types.Attribute("Property", 1, ["id", "item-" + item.Id.toString()]), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("EventHandler", 1, ["onblur", function (e) {
            return new TodoAction("SaveItem", 2, item, e.target.value);
        }]))])])]));
    };

    var itemList = exports.itemList = function (items, activeFilter) {
        var filterItems = function (i) {
            return activeFilter.Case === "Completed" ? i.Done : activeFilter.Case === "Active" ? !i.Done : true;
        };

        return function () {
            var tagName = "ul";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "todo-list"])])], children);
            };
        }()(function (list) {
            return _fableCore.List.map(function (item) {
                return listItem(item);
            }, list);
        }(function (list) {
            return _fableCore.List.filter(filterItems, list);
        }(items)));
    };

    var todoMain = exports.todoMain = function (model) {
        var items = model.Items;

        var allChecked = _fableCore.Seq.exists(function (i) {
            return !i.Done;
        }, items);

        return function () {
            var tagName = "section";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "main"]), new _FableHelpers.Html.Types.Attribute("Style", 1, _fableCore.List.ofArray([["style", "block"]]))])], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("VoidElement", 1, ["input", _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Property", 1, ["id", "toggle-all"]), new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["class", "toggle-all"]), new _FableHelpers.Html.Types.Attribute("Property", 1, ["type", "checkbox"]), new _FableHelpers.Html.Types.Attribute("Property", 1, ["checked", !allChecked ? "true" : ""]), new _FableHelpers.Html.Types.Attribute("EventHandlerBinding", 1, new _FableHelpers.Html.Types.EventHandlerBinding("MouseEventHandler", 1, ["onclick", function (e) {
            return allChecked ? new TodoAction("CheckAll", 0) : new TodoAction("UnCheckAll", 0);
        }]))])]), function () {
            var tagName = "label";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Attribute", 1, ["for", "toggle-all"])])], children);
            };
        }()(_fableCore.List.ofArray([new _FableHelpers.Html.Types.Node("Text", 1, "Mark all as complete")])), itemList(items, model.Filter)]));
    };

    var todoView = exports.todoView = function (model) {
        return function () {
            var tagName = "section";
            return function (children) {
                return new _FableHelpers.Html.Types.Node("Element", 2, [tagName, _fableCore.List.ofArray([new _FableHelpers.Html.Types.Attribute("Property", 1, ["class", "todoapp"])])], children);
            };
        }()(_fableCore.List.ofArray([todoHeader(model.Input)], model.Items.tail == null ? new _fableCore.List() : _fableCore.List.ofArray([todoMain(model), todoFooter(model)])));
    };

    var Storage = exports.Storage = function ($exports) {
        var STORAGE_KEY = "vdom-storage";

        var fetch = $exports.fetch = function () {
            return function (arg00) {
                return JSON.parse(arg00);
            }(function (_arg1) {
                return _arg1 == null ? "[]" : function () {
                    var x = _arg1;
                    return x;
                }();
            }(localStorage.getItem(STORAGE_KEY)));
        };

        var save = $exports.save = function (todos) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        };

        return $exports;
    }({});

    var initList = exports.initList = _fableCore.List.ofArray(Storage.fetch());

    var initModel = exports.initModel = function () {
        var Filter_1 = new Filter("All", 0);
        return new TodoModel(initList, "", Filter_1);
    }();

    var todoApp = exports.todoApp = _FableHelpers.App.withStartNode("#todo", _FableHelpers.App.withSubscriber("modellogger", function () {
        var clo1 = _fableCore.String.fsFormat("%A")(function (x) {
            console.log(x);
        });

        return function (arg10) {
            clo1(arg10);
        };
    }(), _FableHelpers.App.withSubscriber("storagesub", function (_arg1) {
        if (_arg1.Case === "ModelChanged") {
            var old = _arg1.Fields[1];
            var newModel = _arg1.Fields[0];
            Storage.save(Array.from(newModel.Items));
        }
    }, _FableHelpers.App.createApp(new _FableHelpers.App.AppState(initModel, function (model) {
        return todoView(model);
    }, function (model) {
        return function (msg) {
            return todoUpdate(model, msg);
        };
    })))));

    _FableHelpers.App.start((0, _FableHelpers.renderer)(), todoApp);
});
//# sourceMappingURL=virtualdom.js.map