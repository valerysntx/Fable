define(["exports", "fable-core", "virtual-dom"], function (exports, _fableCore, _virtualDom) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = exports.Html = undefined;
    exports.createTree = createTree;
    exports.render = render;
    exports.renderer = renderer;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Html = exports.Html = function ($exports) {
        var Types = $exports.Types = function ($exports) {
            var MouseEvent = $exports.MouseEvent = function () {
                function MouseEvent(altKey, screenX, screenY) {
                    _classCallCheck(this, MouseEvent);

                    this.altKey = altKey;
                    this.screenX = screenX;
                    this.screenY = screenY;
                }

                _createClass(MouseEvent, [{
                    key: "Equals",
                    value: function Equals(other) {
                        return _fableCore.Util.equalsRecords(this, other);
                    }
                }, {
                    key: "CompareTo",
                    value: function CompareTo(other) {
                        return _fableCore.Util.compareRecords(this, other);
                    }
                }]);

                return MouseEvent;
            }();

            _fableCore.Util.setInterfaces(MouseEvent.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "Fable.Helpers.Virtualdom.Html.Types.MouseEvent");

            var KeyboardEvent = $exports.KeyboardEvent = function () {
                function KeyboardEvent(code, keyCode) {
                    _classCallCheck(this, KeyboardEvent);

                    this.code = code;
                    this.keyCode = keyCode;
                }

                _createClass(KeyboardEvent, [{
                    key: "Equals",
                    value: function Equals(other) {
                        return _fableCore.Util.equalsRecords(this, other);
                    }
                }, {
                    key: "CompareTo",
                    value: function CompareTo(other) {
                        return _fableCore.Util.compareRecords(this, other);
                    }
                }]);

                return KeyboardEvent;
            }();

            _fableCore.Util.setInterfaces(KeyboardEvent.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "Fable.Helpers.Virtualdom.Html.Types.KeyboardEvent");

            var EventHandlerBinding = $exports.EventHandlerBinding = function EventHandlerBinding(caseName, fields) {
                _classCallCheck(this, EventHandlerBinding);

                this.Case = caseName;
                this.Fields = fields;
            };

            _fableCore.Util.setInterfaces(EventHandlerBinding.prototype, ["FSharpUnion"], "Fable.Helpers.Virtualdom.Html.Types.EventHandlerBinding");

            var Attribute = $exports.Attribute = function Attribute(caseName, fields) {
                _classCallCheck(this, Attribute);

                this.Case = caseName;
                this.Fields = fields;
            };

            _fableCore.Util.setInterfaces(Attribute.prototype, ["FSharpUnion"], "Fable.Helpers.Virtualdom.Html.Types.Attribute");

            var _Node = $exports.Node = function _Node(caseName, fields) {
                _classCallCheck(this, _Node);

                this.Case = caseName;
                this.Fields = fields;
            };

            _fableCore.Util.setInterfaces(_Node.prototype, ["FSharpUnion"], "Fable.Helpers.Virtualdom.Html.Types.Node");

            return $exports;
        }({});

        var Tags = $exports.Tags = function ($exports) {
            return $exports;
        }({});

        var Attributes = $exports.Attributes = function ($exports) {
            return $exports;
        }({});

        var Events = $exports.Events = function ($exports) {
            return $exports;
        }({});

        var Svg = $exports.Svg = function ($exports) {
            var svgNS = $exports.svgNS = function svgNS() {
                return new Types.Attribute("Property", [["namespace", "http://www.w3.org/2000/svg"]]);
            };

            return $exports;
        }({});

        return $exports;
    }({});

    var App = exports.App = function ($exports) {
        var AppState = $exports.AppState = function AppState(model, view, update) {
            _classCallCheck(this, AppState);

            this.Model = model;
            this.View = view;
            this.Update = update;
        };

        _fableCore.Util.setInterfaces(AppState.prototype, ["FSharpRecord"], "Fable.Helpers.Virtualdom.App.AppState");

        var AppEvents = $exports.AppEvents = function () {
            function AppEvents(caseName, fields) {
                _classCallCheck(this, AppEvents);

                this.Case = caseName;
                this.Fields = fields;
            }

            _createClass(AppEvents, [{
                key: "Equals",
                value: function Equals(other) {
                    return _fableCore.Util.equalsUnions(this, other);
                }
            }, {
                key: "CompareTo",
                value: function CompareTo(other) {
                    return _fableCore.Util.compareUnions(this, other);
                }
            }]);

            return AppEvents;
        }();

        _fableCore.Util.setInterfaces(AppEvents.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "Fable.Helpers.Virtualdom.App.AppEvents");

        var RenderState = $exports.RenderState = function () {
            function RenderState(caseName, fields) {
                _classCallCheck(this, RenderState);

                this.Case = caseName;
                this.Fields = fields;
            }

            _createClass(RenderState, [{
                key: "Equals",
                value: function Equals(other) {
                    return _fableCore.Util.equalsUnions(this, other);
                }
            }, {
                key: "CompareTo",
                value: function CompareTo(other) {
                    return _fableCore.Util.compareUnions(this, other);
                }
            }]);

            return RenderState;
        }();

        _fableCore.Util.setInterfaces(RenderState.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "Fable.Helpers.Virtualdom.App.RenderState");

        var App = $exports.App = function App(appState, init, jsCalls, node, currentTree, subscribers, nodeSelector, renderState) {
            _classCallCheck(this, App);

            this.AppState = appState;
            this.Init = init;
            this.JsCalls = jsCalls;
            this.Node = node;
            this.CurrentTree = currentTree;
            this.Subscribers = subscribers;
            this.NodeSelector = nodeSelector;
            this.RenderState = renderState;
        };

        _fableCore.Util.setInterfaces(App.prototype, ["FSharpRecord"], "Fable.Helpers.Virtualdom.App.App");

        var ScheduleMessage = $exports.ScheduleMessage = function ScheduleMessage(caseName, fields) {
            _classCallCheck(this, ScheduleMessage);

            this.Case = caseName;
            this.Fields = fields;
        };

        _fableCore.Util.setInterfaces(ScheduleMessage.prototype, ["FSharpUnion"], "Fable.Helpers.Virtualdom.App.ScheduleMessage");

        var AppMessage = $exports.AppMessage = function AppMessage(caseName, fields) {
            _classCallCheck(this, AppMessage);

            this.Case = caseName;
            this.Fields = fields;
        };

        _fableCore.Util.setInterfaces(AppMessage.prototype, ["FSharpUnion"], "Fable.Helpers.Virtualdom.App.AppMessage");

        var Renderer = $exports.Renderer = function Renderer(render, diff, patch, createElement) {
            _classCallCheck(this, Renderer);

            this.Render = render;
            this.Diff = diff;
            this.Patch = patch;
            this.CreateElement = createElement;
        };

        _fableCore.Util.setInterfaces(Renderer.prototype, ["FSharpRecord"], "Fable.Helpers.Virtualdom.App.Renderer");

        var createApp = $exports.createApp = function createApp(appState) {
            return new App(appState, null, new _fableCore.List(), null, null, _fableCore.Map.create(null, new _fableCore.GenericComparer(function (x, y) {
                return x < y ? -1 : x > y ? 1 : 0;
            })), null, new RenderState("NoRequest", []));
        };

        var withStartNode = $exports.withStartNode = function withStartNode(selector, app) {
            var NodeSelector = selector;
            return new App(app.AppState, app.Init, app.JsCalls, app.Node, app.CurrentTree, app.Subscribers, NodeSelector, app.RenderState);
        };

        var withInit = $exports.withInit = function withInit(init, app) {
            var Init = init;
            return new App(app.AppState, Init, app.JsCalls, app.Node, app.CurrentTree, app.Subscribers, app.NodeSelector, app.RenderState);
        };

        var withSubscriber = $exports.withSubscriber = function withSubscriber(subscriberId, subscriber, app) {
            var subsribers = function (table) {
                return _fableCore.Map.add(subscriberId, subscriber, table);
            }(app.Subscribers);

            return new App(app.AppState, app.Init, app.JsCalls, app.Node, app.CurrentTree, subsribers, app.NodeSelector, app.RenderState);
        };

        var createScheduler = $exports.createScheduler = function createScheduler() {
            return _fableCore.MailboxProcessor.start(function (inbox) {
                var loop = function (unitVar0) {
                    return function (builder_) {
                        return builder_.Delay(function (unitVar) {
                            return builder_.Bind(inbox.receive(), function (_arg1) {
                                var message = _arg1;
                                var milliseconds = message.Fields[0];
                                var cb = message.Fields[1];
                                window.setTimeout(cb, milliseconds);
                                return builder_.ReturnFrom(loop());
                            });
                        });
                    }(_fableCore.defaultAsyncBuilder);
                };

                return loop();
            });
        };

        var start = $exports.start = function start(renderer, app) {
            var renderTree = function (view) {
                return function (handler) {
                    return function (model) {
                        return renderer.Render(handler)(view(model));
                    };
                };
            };

            var startElem = function () {
                var matchValue = app.NodeSelector;

                if (matchValue != null) {
                    var sel = matchValue;
                    return document.body.querySelector(sel);
                } else {
                    return document.body;
                }
            }();

            var scheduler = createScheduler();
            return _fableCore.MailboxProcessor.start(function (inbox) {
                var post = function (message) {
                    inbox.post(new AppMessage("Message", [message]));
                };

                var notifySubscribers = function (subs) {
                    return function (model) {
                        _fableCore.Map.iterate(function (key, handler) {
                            handler(model);
                        }, subs);
                    };
                };

                var loop = function (state) {
                    return function (builder_) {
                        return builder_.Delay(function (unitVar) {
                            var matchValue = [state.Node, state.CurrentTree];

                            if (matchValue[0] != null) {
                                if (matchValue[1] != null) {
                                    var currentTree = matchValue[1];
                                    var rootNode = matchValue[0];
                                    return builder_.Bind(inbox.receive(), function (_arg1) {
                                        var message = _arg1;

                                        if (message.Case === "Message") {
                                            var msg = message.Fields[0];
                                            notifySubscribers(state.Subscribers)(new AppEvents("ActionReceived", [msg]));
                                            var patternInput = state.AppState.Update(state.AppState.Model)(msg);
                                            var msgs = patternInput[2];
                                            var model_ = patternInput[0];
                                            var jsCalls = patternInput[1];

                                            var renderState = function () {
                                                var matchValue_1 = state.RenderState;

                                                if (matchValue_1.Case === "InProgress") {
                                                    return new RenderState("InProgress", []);
                                                } else {
                                                    scheduler.post(new ScheduleMessage("PingIn", [1000 / 60, function (unitVar0) {
                                                        inbox.post(new AppMessage("Draw", []));
                                                    }]));
                                                    return new RenderState("InProgress", []);
                                                }
                                            }();

                                            _fableCore.Seq.iterate(function (m) {
                                                m(post);
                                            }, msgs);

                                            return builder_.ReturnFrom(loop(function () {
                                                var AppState_1 = function () {
                                                    var inputRecord = state.AppState;
                                                    return new AppState(model_, inputRecord.View, inputRecord.Update);
                                                }();

                                                var JsCalls = _fableCore.List.append(state.JsCalls, jsCalls);

                                                return new App(AppState_1, state.Init, JsCalls, state.Node, state.CurrentTree, state.Subscribers, state.NodeSelector, renderState);
                                            }()));
                                        } else {
                                            if (message.Case === "Draw") {
                                                var matchValue_1 = state.RenderState;

                                                if (matchValue_1.Case === "NoRequest") {
                                                    throw "Shouldn't happen";
                                                    return builder_.Zero();
                                                } else {
                                                    notifySubscribers(state.Subscribers)(new AppEvents("DrawStarted", []));
                                                    var model = state.AppState.Model;
                                                    var jsCalls = state.JsCalls;
                                                    var tree = renderTree(state.AppState.View)(post)(model);
                                                    var patches = renderer.Diff(currentTree)(tree);
                                                    renderer.Patch(rootNode)(patches);

                                                    _fableCore.Seq.iterate(function (i) {
                                                        i();
                                                    }, jsCalls);

                                                    notifySubscribers(state.Subscribers)(new AppEvents("ModelChanged", [model, state.AppState.Model]));
                                                    return builder_.ReturnFrom(loop(function () {
                                                        var RenderState_1 = new RenderState("NoRequest", []);
                                                        var CurrentTree = tree;
                                                        var JsCalls = new _fableCore.List();
                                                        return new App(state.AppState, state.Init, JsCalls, state.Node, CurrentTree, state.Subscribers, state.NodeSelector, RenderState_1);
                                                    }()));
                                                }
                                            } else {
                                                return builder_.ReturnFrom(loop(state));
                                            }
                                        }
                                    });
                                } else {
                                    throw "Shouldn't happen";
                                    return builder_.Zero();
                                }
                            } else {
                                var tree = renderTree(state.AppState.View)(post)(state.AppState.Model);
                                var rootNode = renderer.CreateElement(tree);
                                startElem.appendChild(rootNode);
                                return builder_.Combine(function () {
                                    var matchValue_1 = state.Init;

                                    if (matchValue_1 != null) {
                                        var init = matchValue_1;
                                        init(post);
                                        return builder_.Zero();
                                    } else {
                                        return builder_.Zero();
                                    }
                                }(), builder_.Delay(function (unitVar_1) {
                                    return builder_.ReturnFrom(loop(function () {
                                        var CurrentTree = tree;
                                        var _Node = rootNode;
                                        return new App(state.AppState, state.Init, state.JsCalls, _Node, CurrentTree, state.Subscribers, state.NodeSelector, state.RenderState);
                                    }()));
                                }));
                            }
                        });
                    }(_fableCore.defaultAsyncBuilder);
                };

                return loop(app);
            });
        };

        return $exports;
    }({});

    function createTree(handler, tag, attributes, children) {
        var toAttrs = function (attrs) {
            var elAttributes = function (_arg2) {
                return _arg2.tail == null ? null : function () {
                    var v = _arg2;
                    return ["attributes", _fableCore.Util.createObj(v)];
                }();
            }(_fableCore.List.choose(function (x) {
                return x;
            }, _fableCore.List.map(function (_arg1) {
                return _arg1.Case === "Attribute" ? function () {
                    var v = _arg1.Fields[0][1];
                    var k = _arg1.Fields[0][0];
                    return [k, v];
                }() : null;
            }, attrs)));

            var props = _fableCore.List.map(function (_arg4) {
                return _arg4.Case === "Style" ? function () {
                    var style = _arg4.Fields[0];
                    return ["style", _fableCore.Util.createObj(style)];
                }() : _arg4.Case === "Property" ? function () {
                    var v = _arg4.Fields[0][1];
                    var k = _arg4.Fields[0][0];
                    return [k, v];
                }() : _arg4.Case === "EventHandlerBinding" ? function () {
                    var binding = _arg4.Fields[0];

                    if (binding.Case === "KeyboardEventHandler") {
                        var f = binding.Fields[0][1];
                        var ev = binding.Fields[0][0];
                        return [ev, function ($var1) {
                            return handler(f($var1));
                        }];
                    } else {
                        if (binding.Case === "EventHandler") {
                            var f = binding.Fields[0][1];
                            var ev = binding.Fields[0][0];
                            return [ev, function ($var2) {
                                return handler(f($var2));
                            }];
                        } else {
                            var f = binding.Fields[0][1];
                            var ev = binding.Fields[0][0];
                            return [ev, function ($var3) {
                                return handler(f($var3));
                            }];
                        }
                    }
                }() : function () {
                    throw "Shouldn't happen";
                }();
            }, _fableCore.List.filter(function (_arg3) {
                return _arg3.Case === "Attribute" ? false : true;
            }, attrs));

            return function (x) {
                return x;
            }(_fableCore.Util.createObj(elAttributes != null ? function () {
                var x = elAttributes;
                return _fableCore.List.ofArray([x], props);
            }() : props));
        };

        var elem = (0, _virtualDom.h)(tag, toAttrs(attributes), Array.from(children));
        return elem;
    }

    function render(handler, node) {
        var $target0 = function (attrs, nodes, tag) {
            return createTree(handler, tag, attrs, _fableCore.List.map(function (node_1) {
                return render(handler, node_1);
            }, nodes));
        };

        if (node.Case === "Svg") {
            return $target0(node.Fields[0][1], node.Fields[1], node.Fields[0][0]);
        } else {
            if (node.Case === "VoidElement") {
                var tag = node.Fields[0][0];
                var attrs = node.Fields[0][1];
                return createTree(handler, tag, attrs, new _fableCore.List());
            } else {
                if (node.Case === "Text") {
                    var str = node.Fields[0];
                    return str;
                } else {
                    if (node.Case === "WhiteSpace") {
                        var str = node.Fields[0];
                        return str;
                    } else {
                        return $target0(node.Fields[0][1], node.Fields[1], node.Fields[0][0]);
                    }
                }
            }
        }
    }

    function renderer() {
        return new App.Renderer(function (handler) {
            return function (node) {
                return render(handler, node);
            };
        }, function (tree1) {
            return function (tree2) {
                return (0, _virtualDom.diff)(tree1, tree2);
            };
        }, function (node) {
            return function (patches) {
                return (0, _virtualDom.patch)(node, patches);
            };
        }, function (e) {
            return (0, _virtualDom.create)(e);
        });
    }
});
//# sourceMappingURL=Fable.Helpers.Virtualdom-1273792215.js.map