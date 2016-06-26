define(["exports", "fable-core"], function (exports, _fableCore) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.selectGameOnChange = exports.newGameOnClick = exports.config = exports.selectColors = exports.selectHeight = exports.selectWidth = exports.selectGame = exports.buttonNewGame = exports.defaultConfig = exports.rndColorGtor = exports.updateUi = exports.getById = exports.renderBoardToHtmlString = exports.api = exports.SameGameDomain = exports.SameGameTypes = exports.PresetGames = undefined;

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

    var PresetGames = exports.PresetGames = function ($exports) {
        var games = $exports.games = _fableCore.List.ofArray([_fableCore.List.ofArray([5, 3, 3, 4, 2, 3, 4, 2, 3, 3, 2, 5, 3, 2, 3, 4, 5, 5, 5, 5, 1, 1, 3, 5, 4, 1, 3, 1, 2, 3, 1, 3, 1, 3, 2, 1, 2, 3, 4, 3, 2, 2, 1, 4, 5, 5, 3, 3, 3, 2, 3, 3, 1, 1, 5, 5, 5, 4, 5, 1, 1, 3, 5, 5, 3, 4, 4, 5, 5, 2, 2, 3, 1, 2, 3, 4, 1, 5, 1, 4, 4, 5, 4, 1, 1, 3, 3, 1, 4, 3, 2, 4, 3, 3, 3, 5, 3, 1, 2, 1, 2, 3, 3, 2, 5, 1, 2, 4, 3, 1, 4, 1, 3, 1, 3, 1, 5, 5, 5, 5, 2, 4, 2, 3, 1, 3, 5, 4, 5, 4, 2, 1, 4, 1, 3, 1, 3, 3, 1, 5, 2, 4, 3, 3, 4, 1, 1, 2, 1, 2, 5, 4, 1, 2, 4, 3, 2, 1, 1, 2, 1, 4, 5, 4, 5, 4, 3, 3, 4, 2, 4, 3, 4, 5, 4, 4, 1, 4, 4, 5, 3, 3, 4, 4, 5, 4, 5, 2, 2, 5, 5, 3, 2, 5, 5, 3, 5, 4, 4, 1, 4, 4, 4, 4, 4, 2, 1, 1, 4, 1, 3, 4, 2, 1, 5, 3, 5, 2, 5, 2, 4, 1, 2, 4, 3]), _fableCore.List.ofArray([4, 1, 3, 4, 4, 2, 5, 3, 2, 5, 2, 3, 2, 3, 3, 5, 4, 5, 5, 1, 4, 1, 1, 4, 3, 5, 4, 1, 2, 5, 1, 5, 1, 3, 4, 3, 3, 3, 4, 1, 3, 1, 1, 1, 2, 3, 4, 4, 5, 1, 1, 1, 4, 1, 1, 3, 1, 5, 1, 5, 4, 4, 2, 2, 5, 3, 3, 5, 5, 5, 3, 1, 1, 4, 4, 3, 5, 5, 2, 1, 1, 1, 1, 1, 5, 5, 1, 5, 2, 1, 2, 3, 3, 5, 3, 4, 5, 5, 2, 5, 5, 4, 5, 1, 4, 5, 5, 1, 3, 4, 4, 2, 4, 1, 4, 4, 4, 1, 2, 5, 3, 4, 4, 4, 3, 1, 4, 2, 1, 1, 3, 5, 4, 2, 1, 3, 1, 1, 2, 5, 1, 5, 2, 3, 2, 1, 4, 2, 1, 5, 5, 4, 3, 2, 3, 2, 5, 1, 3, 4, 1, 3, 5, 3, 2, 4, 4, 2, 1, 1, 3, 4, 4, 3, 5, 3, 2, 2, 3, 3, 2, 2, 2, 2, 1, 4, 3, 2, 5, 4, 4, 1, 3, 4, 5, 3, 1, 5, 2, 3, 3, 3, 2, 5, 2, 2, 5, 1, 2, 1, 1, 4, 4, 1, 2, 5, 2, 4, 3, 3, 2, 2, 3, 2, 3]), _fableCore.List.ofArray([4, 2, 3, 1, 5, 4, 1, 4, 4, 4, 4, 2, 1, 4, 5, 5, 3, 4, 1, 3, 5, 3, 5, 4, 2, 1, 4, 2, 2, 5, 2, 2, 4, 4, 4, 4, 3, 2, 5, 4, 5, 5, 2, 4, 2, 1, 1, 2, 1, 5, 4, 5, 1, 1, 5, 2, 2, 5, 5, 4, 1, 5, 3, 5, 3, 3, 4, 3, 5, 2, 2, 1, 4, 2, 3, 1, 1, 2, 3, 1, 1, 2, 1, 2, 1, 3, 1, 4, 4, 3, 2, 4, 3, 1, 3, 1, 2, 2, 1, 4, 3, 4, 2, 5, 3, 3, 1, 4, 3, 5, 1, 5, 3, 4, 4, 5, 4, 1, 4, 5, 3, 1, 4, 3, 5, 4, 4, 3, 5, 3, 4, 5, 2, 4, 4, 3, 5, 1, 5, 4, 3, 2, 1, 5, 2, 2, 1, 4, 3, 4, 2, 1, 3, 1, 1, 3, 5, 4, 1, 4, 5, 3, 5, 1, 1, 2, 4, 5, 1, 2, 5, 4, 2, 1, 3, 2, 5, 5, 2, 4, 4, 5, 1, 2, 1, 3, 2, 1, 3, 2, 3, 2, 1, 2, 4, 5, 2, 1, 4, 1, 3, 2, 4, 2, 5, 3, 5, 2, 4, 5, 3, 1, 3, 2, 1, 1, 2, 4, 5, 4, 5, 4, 2, 5, 4]), _fableCore.List.ofArray([2, 2, 4, 1, 1, 4, 3, 5, 4, 2, 5, 5, 1, 5, 3, 3, 4, 4, 2, 3, 1, 1, 1, 5, 2, 3, 4, 4, 3, 2, 3, 3, 5, 1, 3, 1, 2, 1, 3, 2, 1, 4, 4, 5, 1, 4, 5, 2, 3, 4, 5, 3, 5, 2, 3, 1, 1, 5, 5, 3, 1, 4, 2, 3, 5, 3, 5, 1, 3, 2, 2, 4, 1, 1, 3, 2, 2, 2, 5, 3, 4, 2, 2, 5, 2, 5, 3, 4, 4, 2, 1, 2, 1, 1, 1, 2, 3, 2, 5, 4, 4, 5, 4, 1, 2, 2, 3, 5, 4, 1, 5, 4, 1, 2, 5, 4, 2, 3, 1, 5, 5, 2, 3, 2, 2, 5, 3, 5, 5, 1, 5, 1, 2, 1, 4, 4, 4, 1, 3, 1, 3, 4, 1, 3, 3, 2, 2, 5, 2, 2, 5, 5, 1, 1, 4, 3, 3, 2, 5, 2, 4, 4, 5, 3, 1, 4, 2, 5, 3, 1, 1, 2, 5, 1, 3, 2, 2, 5, 5, 5, 4, 4, 4, 4, 1, 1, 5, 2, 2, 2, 2, 3, 1, 2, 3, 4, 5, 3, 2, 4, 5, 2, 2, 2, 2, 4, 1, 1, 3, 3, 2, 4, 2, 1, 4, 5, 5, 1, 3, 1, 4, 5, 3, 2, 5]), _fableCore.List.ofArray([5, 3, 5, 3, 4, 4, 3, 3, 5, 5, 3, 2, 2, 5, 1, 2, 3, 2, 3, 2, 5, 1, 4, 5, 2, 1, 4, 1, 2, 4, 1, 2, 2, 3, 1, 3, 3, 4, 1, 4, 4, 4, 1, 1, 3, 4, 2, 4, 3, 1, 4, 3, 5, 5, 4, 4, 4, 5, 1, 3, 1, 2, 2, 1, 4, 1, 5, 5, 4, 4, 4, 4, 1, 4, 4, 1, 5, 4, 2, 3, 5, 1, 4, 1, 1, 3, 3, 3, 4, 3, 4, 3, 3, 4, 3, 2, 3, 1, 2, 2, 5, 3, 5, 4, 2, 5, 2, 1, 2, 4, 4, 1, 4, 3, 4, 1, 4, 1, 5, 2, 4, 3, 1, 2, 5, 1, 2, 3, 2, 3, 4, 5, 2, 1, 4, 2, 1, 1, 5, 2, 1, 2, 1, 1, 4, 3, 5, 5, 5, 2, 3, 3, 1, 5, 4, 2, 3, 4, 4, 1, 4, 5, 5, 5, 1, 5, 5, 3, 5, 3, 1, 4, 2, 4, 1, 2, 2, 5, 4, 3, 1, 2, 4, 5, 5, 1, 5, 2, 2, 3, 4, 3, 2, 4, 4, 2, 3, 2, 1, 5, 4, 3, 1, 3, 2, 5, 1, 3, 4, 2, 5, 4, 1, 2, 1, 2, 2, 5, 1, 5, 1, 3, 1, 3, 5]), _fableCore.List.ofArray([3, 3, 3, 4, 5, 5, 2, 4, 4, 3, 4, 2, 2, 2, 1, 1, 4, 4, 3, 4, 2, 2, 1, 1, 4, 5, 3, 2, 4, 2, 3, 2, 4, 3, 4, 3, 4, 3, 1, 5, 4, 4, 1, 2, 1, 4, 1, 3, 3, 3, 4, 3, 2, 3, 4, 2, 2, 3, 1, 5, 2, 5, 5, 3, 5, 3, 4, 4, 4, 3, 2, 1, 4, 4, 5, 4, 1, 5, 5, 5, 4, 1, 5, 2, 4, 1, 1, 1, 5, 3, 1, 2, 2, 1, 3, 5, 4, 4, 2, 4, 1, 2, 5, 5, 2, 3, 4, 3, 4, 1, 1, 3, 3, 2, 2, 2, 5, 4, 5, 5, 2, 4, 5, 1, 2, 1, 5, 3, 1, 5, 5, 3, 3, 2, 4, 3, 1, 1, 1, 1, 2, 3, 3, 5, 3, 4, 5, 1, 5, 2, 5, 1, 5, 3, 2, 2, 2, 5, 3, 1, 4, 2, 2, 4, 1, 3, 5, 1, 3, 4, 1, 5, 4, 4, 4, 5, 2, 1, 4, 4, 1, 4, 3, 5, 1, 4, 3, 1, 5, 2, 1, 2, 3, 5, 2, 5, 1, 4, 4, 5, 5, 4, 3, 1, 1, 5, 3, 1, 5, 3, 1, 2, 1, 5, 5, 5, 4, 3, 3, 2, 1, 5, 2, 1, 4]), _fableCore.List.ofArray([4, 1, 1, 4, 1, 1, 2, 3, 5, 5, 3, 4, 2, 2, 5, 1, 3, 1, 1, 4, 2, 4, 2, 2, 3, 3, 1, 4, 5, 2, 3, 5, 1, 1, 1, 1, 2, 3, 1, 4, 3, 2, 2, 3, 5, 4, 2, 4, 1, 4, 1, 5, 4, 4, 2, 1, 4, 5, 2, 3, 5, 3, 4, 4, 2, 3, 4, 2, 1, 5, 4, 1, 1, 3, 1, 5, 3, 5, 3, 4, 2, 3, 4, 1, 1, 3, 2, 3, 4, 1, 2, 3, 2, 4, 4, 1, 4, 3, 1, 2, 1, 1, 4, 2, 1, 1, 5, 2, 3, 2, 3, 4, 2, 3, 1, 3, 5, 4, 3, 5, 2, 1, 3, 1, 3, 1, 5, 3, 4, 1, 2, 5, 5, 2, 4, 2, 4, 3, 5, 1, 4, 5, 1, 3, 3, 3, 2, 4, 3, 1, 2, 5, 5, 1, 5, 1, 3, 3, 4, 5, 2, 2, 3, 2, 5, 3, 5, 1, 5, 5, 5, 2, 4, 3, 1, 2, 5, 1, 4, 1, 5, 1, 5, 4, 5, 2, 1, 4, 2, 4, 4, 2, 5, 1, 4, 2, 3, 4, 3, 5, 4, 1, 4, 4, 2, 5, 2, 2, 5, 4, 1, 2, 5, 4, 5, 1, 3, 5, 3, 4, 3, 1, 5, 1, 1]), _fableCore.List.ofArray([3, 4, 1, 3, 1, 3, 3, 1, 4, 2, 3, 5, 5, 4, 5, 2, 2, 3, 1, 1, 3, 5, 2, 5, 5, 4, 3, 3, 4, 3, 5, 4, 2, 2, 5, 3, 5, 3, 2, 2, 4, 5, 2, 4, 2, 3, 3, 1, 4, 3, 2, 1, 4, 4, 2, 3, 3, 1, 4, 3, 1, 5, 2, 2, 3, 4, 4, 4, 4, 3, 2, 4, 2, 5, 3, 4, 3, 4, 3, 2, 2, 3, 5, 2, 1, 4, 1, 3, 1, 3, 5, 5, 5, 4, 2, 5, 3, 5, 1, 4, 5, 5, 3, 2, 1, 3, 5, 4, 2, 4, 1, 5, 3, 2, 2, 4, 1, 1, 1, 5, 3, 1, 4, 2, 3, 3, 5, 3, 4, 3, 1, 3, 3, 5, 2, 3, 1, 3, 2, 4, 4, 2, 2, 2, 2, 5, 2, 3, 3, 3, 4, 3, 4, 2, 1, 4, 1, 1, 5, 3, 4, 3, 1, 4, 3, 3, 2, 4, 5, 5, 4, 4, 5, 3, 1, 2, 5, 2, 5, 3, 2, 2, 5, 1, 5, 4, 4, 2, 5, 4, 2, 5, 4, 4, 5, 1, 1, 3, 4, 5, 4, 4, 3, 4, 5, 1, 3, 2, 1, 4, 5, 5, 1, 2, 2, 3, 3, 1, 5, 5, 4, 1, 4, 2, 4]), _fableCore.List.ofArray([2, 1, 1, 5, 1, 5, 3, 5, 1, 2, 2, 3, 3, 1, 2, 4, 3, 5, 5, 1, 1, 1, 1, 2, 3, 4, 3, 1, 5, 5, 4, 4, 2, 2, 5, 2, 5, 4, 5, 4, 4, 5, 5, 1, 3, 4, 5, 3, 3, 1, 5, 4, 2, 3, 3, 2, 1, 4, 3, 2, 3, 3, 5, 1, 4, 3, 2, 1, 1, 5, 5, 4, 5, 2, 3, 1, 1, 5, 5, 4, 5, 1, 3, 4, 1, 1, 2, 5, 5, 4, 1, 2, 2, 4, 2, 1, 1, 5, 2, 5, 2, 4, 2, 3, 2, 1, 4, 1, 5, 2, 1, 1, 4, 4, 2, 2, 5, 2, 5, 4, 1, 3, 1, 3, 5, 3, 3, 2, 1, 2, 1, 2, 3, 5, 2, 1, 5, 5, 3, 5, 3, 2, 5, 4, 4, 1, 3, 3, 2, 5, 2, 4, 5, 4, 5, 5, 3, 5, 4, 4, 3, 2, 5, 4, 1, 4, 3, 5, 2, 2, 3, 5, 4, 5, 2, 5, 4, 3, 4, 5, 1, 1, 5, 1, 1, 2, 2, 5, 1, 3, 3, 5, 1, 4, 3, 1, 2, 1, 3, 5, 3, 3, 1, 1, 3, 2, 1, 1, 3, 5, 2, 1, 1, 5, 4, 3, 2, 5, 3, 4, 3, 4, 5, 5, 4]), _fableCore.List.ofArray([5, 3, 1, 1, 5, 5, 1, 2, 4, 2, 5, 5, 5, 5, 2, 2, 5, 5, 1, 2, 1, 1, 2, 3, 4, 1, 5, 3, 5, 2, 1, 4, 2, 1, 1, 4, 4, 4, 5, 3, 3, 2, 3, 4, 1, 1, 3, 4, 5, 1, 4, 1, 1, 4, 4, 5, 2, 3, 2, 5, 5, 4, 3, 2, 2, 1, 3, 4, 4, 4, 3, 2, 1, 4, 4, 5, 4, 4, 2, 3, 3, 2, 4, 5, 4, 1, 4, 3, 2, 2, 2, 1, 2, 1, 3, 5, 5, 1, 3, 1, 4, 5, 5, 2, 3, 3, 1, 2, 1, 5, 1, 4, 1, 4, 2, 4, 5, 3, 4, 2, 3, 5, 2, 3, 2, 2, 5, 1, 2, 4, 1, 3, 1, 2, 5, 4, 2, 3, 2, 1, 1, 2, 3, 3, 1, 4, 5, 3, 4, 4, 5, 2, 2, 2, 4, 4, 3, 2, 5, 1, 3, 5, 1, 3, 4, 4, 3, 5, 5, 4, 2, 3, 2, 4, 2, 1, 3, 4, 3, 3, 2, 2, 3, 3, 4, 5, 2, 5, 3, 2, 1, 1, 3, 1, 4, 1, 1, 5, 5, 3, 1, 1, 4, 1, 2, 3, 1, 4, 1, 3, 1, 5, 5, 3, 4, 2, 2, 4, 5, 5, 3, 3, 2, 3, 4])]);

        return $exports;
    }({});

    var SameGameTypes = exports.SameGameTypes = function ($exports) {
        var Position = $exports.Position = function () {
            function Position($arg0, $arg1) {
                _classCallCheck(this, Position);

                this.Col = $arg0;
                this.Row = $arg1;
            }

            _createClass(Position, [{
                key: "Left",
                get: function () {
                    return new Position(this.Col - 1, this.Row);
                }
            }, {
                key: "Right",
                get: function () {
                    return new Position(this.Col + 1, this.Row);
                }
            }, {
                key: "Up",
                get: function () {
                    var Row;
                    return Row = this.Row + 1, new Position(this.Col, Row);
                }
            }, {
                key: "Down",
                get: function () {
                    var Row;
                    return Row = this.Row - 1, new Position(this.Col, Row);
                }
            }]);

            return Position;
        }();

        _fableCore.Util.setInterfaces(Position.prototype, [], "Samegame.SameGameTypes.Position");

        var Color = $exports.Color = function Color() {
            _classCallCheck(this, Color);

            this.Case = arguments[0];
            this.Fields = [];

            for (var i = 1; i < arguments.length; i++) {
                this.Fields[i - 1] = arguments[i];
            }
        };

        _fableCore.Util.setInterfaces(Color.prototype, [], "Samegame.SameGameTypes.Color");

        var CellState = $exports.CellState = function CellState() {
            _classCallCheck(this, CellState);

            this.Case = arguments[0];
            this.Fields = [];

            for (var i = 1; i < arguments.length; i++) {
                this.Fields[i - 1] = arguments[i];
            }
        };

        _fableCore.Util.setInterfaces(CellState.prototype, [], "Samegame.SameGameTypes.CellState");

        var Cell = $exports.Cell = function Cell($arg0, $arg1) {
            _classCallCheck(this, Cell);

            this.Position = $arg0;
            this.State = $arg1;
        };

        _fableCore.Util.setInterfaces(Cell.prototype, [], "Samegame.SameGameTypes.Cell");

        var Group = $exports.Group = function Group($arg0, $arg1) {
            _classCallCheck(this, Group);

            this.Color = $arg0;
            this.Positions = $arg1;
        };

        _fableCore.Util.setInterfaces(Group.prototype, [], "Samegame.SameGameTypes.Group");

        var Game = $exports.Game = function Game() {
            _classCallCheck(this, Game);

            this.Case = arguments[0];
            this.Fields = [];

            for (var i = 1; i < arguments.length; i++) {
                this.Fields[i - 1] = arguments[i];
            }
        };

        _fableCore.Util.setInterfaces(Game.prototype, [], "Samegame.SameGameTypes.Game");

        var GameState = $exports.GameState = function GameState($arg0, $arg1) {
            _classCallCheck(this, GameState);

            this.Board = $arg0;
            this.Score = $arg1;
        };

        _fableCore.Util.setInterfaces(GameState.prototype, [], "Samegame.SameGameTypes.GameState");

        var GameConfig = $exports.GameConfig = function GameConfig($arg0, $arg1, $arg2) {
            _classCallCheck(this, GameConfig);

            this.NumberOfColumns = $arg0;
            this.NumberOfRows = $arg1;
            this.StoneGenerator = $arg2;
        };

        _fableCore.Util.setInterfaces(GameConfig.prototype, [], "Samegame.SameGameTypes.GameConfig");

        var SameGameApi = $exports.SameGameApi = function SameGameApi($arg0, $arg1) {
            _classCallCheck(this, SameGameApi);

            this.NewGame = $arg0;
            this.Play = $arg1;
        };

        _fableCore.Util.setInterfaces(SameGameApi.prototype, [], "Samegame.SameGameTypes.SameGameApi");

        return $exports;
    }({});

    var SameGameDomain = exports.SameGameDomain = function ($exports) {
        var square = function (x) {
            return x * x;
        };

        var bonus = 1000;

        var calcScore = function (groupSize) {
            return square(groupSize - 2);
        };

        var penalty = function (stonesLeft) {
            return -square(stonesLeft - 2);
        };

        var getCellState = function (board, pos) {
            var colCount;
            return colCount = board.length, (((pos.Col < colCount ? pos.Col >= 0 : false) ? pos.Row < _fableCore.Seq.item(pos.Col, board).length : false) ? pos.Row >= 0 : false) ? _fableCore.Seq.item(pos.Row, _fableCore.Seq.item(pos.Col, board)) : new SameGameTypes.CellState("Empty");
        };

        var findAdjacentWithSameColor = function (board, col, pos) {
            return _fableCore.List.map(function (tuple) {
                return tuple[1];
            }, _fableCore.List.filter(function (cell) {
                return _fableCore.Util.compareTo(cell[0], new SameGameTypes.CellState("Stone", col)) === 0;
            }, _fableCore.List.map(function (p) {
                return [getCellState(board, p), p];
            }, _fableCore.List.ofArray([pos.Up, pos.Right, pos.Down, pos.Left]))));
        };

        var hasValidMoves = function (board) {
            return _fableCore.Seq.exists(function (col) {
                return _fableCore.Seq.exists(function (cell) {
                    var matchValue, c;
                    return matchValue = cell.State, matchValue.Case === "Stone" ? (c = matchValue.Fields[0], function ($var1) {
                        return !($var1.tail == null);
                    }(function (pos) {
                        return findAdjacentWithSameColor(board, c, pos);
                    }(cell.Position))) : false;
                }, col);
            }, _fableCore.Seq.mapi(function (i, col) {
                return _fableCore.Seq.mapi(function (j, cell) {
                    return new SameGameTypes.Cell(new SameGameTypes.Position(i, j), cell);
                }, col);
            }, board));
        };

        var numberOfStones = function (board) {
            var numOfStonesInCol;
            return numOfStonesInCol = function () {
                var projection;
                return projection = function (_arg1) {
                    var c;
                    return _arg1.Case === "Empty" ? 0 : (c = _arg1.Fields[0], 1);
                }, function (list) {
                    return _fableCore.Seq.sumBy(projection, list);
                };
            }(), _fableCore.Seq.sum(function (list) {
                return _fableCore.List.map(numOfStonesInCol, list);
            }(board));
        };

        var isEmpty = function (board) {
            return _fableCore.Seq.forall(function ($var2) {
                return _fableCore.Util.compareTo(new SameGameTypes.CellState("Empty"), $var2.head) === 0;
            }, board);
        };

        var evaluateGameState = function (gameState) {
            var Score, score;
            return hasValidMoves(gameState.Board) ? new SameGameTypes.Game("InProgress", gameState) : isEmpty(gameState.Board) ? new SameGameTypes.Game("Finished", (Score = gameState.Score + bonus, new SameGameTypes.GameState(gameState.Board, Score))) : (score = gameState.Score + penalty(numberOfStones(gameState.Board)), new SameGameTypes.Game("Finished", new SameGameTypes.GameState(gameState.Board, score)));
        };

        var getGroup = function (board, position) {
            var find;
            return find = function (ps) {
                return function (col) {
                    return function (group) {
                        return ps.tail != null ? function () {
                            var xs, x, cells;
                            return xs = ps.tail, x = ps.head, cells = _fableCore.List.filter(function (pos) {
                                return !_fableCore.Seq.exists(function (y) {
                                    return _fableCore.Util.compareTo(pos, y) === 0;
                                }, _fableCore.List.append(xs, group));
                            }, function (pos) {
                                return findAdjacentWithSameColor(board, col, pos);
                            }(x)), find(_fableCore.List.append(cells, xs))(col)(_fableCore.List.ofArray([x], group));
                        }() : group;
                    };
                };
            }, function (_arg1) {
                var c, positions;
                return _arg1.Case === "Stone" ? (c = _arg1.Fields[0], positions = find(_fableCore.List.ofArray([position]))(c)(new _fableCore.List()), positions.length > 1 ? new SameGameTypes.Group(c, positions) : null) : null;
            }(getCellState(board, position));
        };

        var removeGroup = function (group, board) {
            return function (cols) {
                return _fableCore.List.append(cols, _fableCore.List.replicate(board.length - cols.length, _fableCore.List.replicate(_fableCore.Seq.item(0, board).length, new SameGameTypes.CellState("Empty"))));
            }(_fableCore.List.filter(function ($var3) {
                return _fableCore.Util.compareTo(new SameGameTypes.CellState("Empty"), $var3.head) !== 0;
            }, _fableCore.List.mapi(function (i, col) {
                return function (col_) {
                    return _fableCore.List.append(col_, _fableCore.List.replicate(col.length - col_.length, new SameGameTypes.CellState("Empty")));
                }(_fableCore.List.map(function (cell) {
                    return cell.State;
                }, _fableCore.List.filter(function (cell) {
                    return function ($var4) {
                        return !_fableCore.Seq.exists(function () {
                            var x;
                            return x = cell.Position, function (y) {
                                return _fableCore.Util.compareTo(x, y) === 0;
                            };
                        }(), $var4);
                    }(group.Positions);
                }, _fableCore.List.mapi(function (j, cell) {
                    return new SameGameTypes.Cell(new SameGameTypes.Position(i, j), cell);
                }, col))));
            }, board)));
        };

        var play = function (gameState, pos) {
            return function (_arg1) {
                var g, newBoard;
                return _arg1 != null ? (g = _arg1, newBoard = function (board) {
                    return removeGroup(g, board);
                }(gameState.Board), new SameGameTypes.GameState(newBoard, gameState.Score + calcScore(g.Positions.length))) : gameState;
            }(getGroup(gameState.Board, pos));
        };

        var playIfRunning = function (game, pos) {
            var gameState;
            return game.Case === "InProgress" ? (gameState = game.Fields[0], evaluateGameState(play(gameState, pos))) : game;
        };

        var isValid = function (conf) {
            return (conf.NumberOfColumns < 3 ? true : conf.NumberOfColumns > 15) ? false : (conf.NumberOfRows < 3 ? true : conf.NumberOfRows > 15) ? false : true;
        };

        var newGame = function (config) {
            var createBoard;
            return createBoard = function (config_1) {
                return function (arg0) {
                    return arg0;
                }(evaluateGameState(function (board) {
                    return new SameGameTypes.GameState(board, 0);
                }(_fableCore.List.init(config_1.NumberOfColumns, function (_arg2) {
                    return _fableCore.List.init(config_1.NumberOfRows, function (_arg1) {
                        return config_1.StoneGenerator();
                    });
                }))));
            }, isValid(config) ? createBoard(config) : null;
        };

        var api = $exports.api = new SameGameTypes.SameGameApi(function (config) {
            return newGame(config);
        }, function (game) {
            return function (pos) {
                return playIfRunning(game, pos);
            };
        });
        return $exports;
    }({});

    var api = exports.api = SameGameDomain.api;

    var renderBoardToHtmlString = exports.renderBoardToHtmlString = function (board) {
        var renderCell, makeBoard;
        return renderCell = function (x) {
            return function (y) {
                return function (col) {
                    return "<td class='sg-td'>" + function () {
                        return function () {
                            var clo1;
                            return clo1 = _fableCore.String.fsFormat("<a href='javaScript:void(0);' id='cell-%d-%d'>")(function (x) {
                                return x;
                            }), function (arg10) {
                                return function () {
                                    var clo2;
                                    return clo2 = clo1(arg10), function (arg20) {
                                        return clo2(arg20);
                                    };
                                }();
                            };
                        }();
                    }()(x)(y) + function () {
                        return function () {
                            var clo1;
                            return clo1 = _fableCore.String.fsFormat("<div class='sg-cell sg-color%d'>")(function (x) {
                                return x;
                            }), function (arg10) {
                                return clo1(arg10);
                            };
                        }();
                    }()(col) + "</div></a></td>";
                };
            };
        }, makeBoard = function (board_1) {
            return "<table class='sg-table horiz-centered'>" + _fableCore.String.concat("", _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
                return _fableCore.Seq.map(function (y) {
                    return "<tr class='sg-tr'>" + _fableCore.String.concat("", _fableCore.List.map(function (x) {
                        return renderCell(x)(y)(_fableCore.Seq.item(y, _fableCore.Seq.item(x, board_1)));
                    }, _fableCore.Seq.toList(_fableCore.Seq.range(0, board_1.length - 1)))) + "</tr>";
                }, _fableCore.Seq.toList(_fableCore.Seq.rangeStep(_fableCore.Seq.item(0, board_1).length - 1, -1, 0)));
            }))) + "</table>";
        }, makeBoard(_fableCore.List.map(function (col) {
            return _fableCore.List.map(function (_arg1) {
                var c;
                return _arg1.Case === "Empty" ? 0 : (c = _arg1.Fields[0].Fields[0], c);
            }, col);
        }, board));
    };

    var getById = exports.getById = function (id) {
        return document.getElementById(id);
    };

    var updateUi = exports.updateUi = function (game) {
        var gs, board;
        var boardElement = getById("sg-board");
        var scoreElement = getById("sg-score");

        var play = function (game_1) {
            return function (tupledArg) {
                var $var5;
                var x = tupledArg[0];
                var y = tupledArg[1];
                updateUi(($var5 = game_1, $var5 != null ? function (g) {
                    return api.Play(g)(new SameGameTypes.Position(x, y));
                }($var5) : $var5));
            };
        };

        var addListeners = function (maxColIndex) {
            return function (maxRowIndex) {
                _fableCore.Seq.iter(function (x) {
                    _fableCore.Seq.iter(function (y) {
                        var cellId = function () {
                            return function () {
                                var clo1;
                                return clo1 = _fableCore.String.fsFormat("cell-%d-%d")(function (x) {
                                    return x;
                                }), function (arg10) {
                                    return function () {
                                        var clo2;
                                        return clo2 = clo1(arg10), function (arg20) {
                                            return clo2(arg20);
                                        };
                                    }();
                                };
                            }();
                        }()(x)(y);

                        var el = getById(cellId);
                        el.addEventListener('click', function (_arg1) {
                            return play(game)([x, y]), null;
                        }, null);
                    }, _fableCore.Seq.toList(_fableCore.Seq.range(0, maxRowIndex)));
                }, _fableCore.Seq.toList(_fableCore.Seq.range(0, maxColIndex)));
            };
        };

        game != null ? game.Case === "Finished" ? (gs = game.Fields[0], board = renderBoardToHtmlString(gs.Board), boardElement.innerHTML = board, scoreElement.innerText = "No more moves. " + function () {
            return function () {
                var clo1;
                return clo1 = _fableCore.String.fsFormat("Your final score is %i point(s).")(function (x) {
                    return x;
                }), function (arg10) {
                    return clo1(arg10);
                };
            }();
        }()(gs.Score)) : (gs = game.Fields[0], board = renderBoardToHtmlString(gs.Board), boardElement.innerHTML = board, addListeners(gs.Board.length - 1)(_fableCore.Seq.item(0, gs.Board).length - 1), scoreElement.innerText = function () {
            return function () {
                var clo1;
                return clo1 = _fableCore.String.fsFormat("%i point(s).")(function (x) {
                    return x;
                }), function (arg10) {
                    return clo1(arg10);
                };
            }();
        }()(gs.Score)) : boardElement.innerText = "Sorry, an error occurred while rendering the board.";
    };

    var rndColorGtor = exports.rndColorGtor = function (i) {
        return function () {
            var rnd;
            return rnd = {}, function (unitVar0) {
                return function (arg0) {
                    return new SameGameTypes.CellState("Stone", arg0);
                }(function (arg0) {
                    return new SameGameTypes.Color("Color", arg0);
                }(Math.floor(Math.random() * (i - 0)) + 0 + 1));
            };
        }();
    };

    var defaultConfig = exports.defaultConfig = function (arr) {
        return new SameGameTypes.GameConfig(arr[0], arr[1], rndColorGtor(arr[2]));
    }(Int32Array.from(_fableCore.Seq.map(function (value) {
        return Number.parseInt(value);
    }, function (className) {
        return _fableCore.String.split(className, "-");
    }(getById("sg-board").className))));

    var buttonNewGame = exports.buttonNewGame = getById("new-game");
    var selectGame = exports.selectGame = getById("sg-select-game");
    var selectWidth = exports.selectWidth = getById("sg-select-w");
    var selectHeight = exports.selectHeight = getById("sg-select-h");
    var selectColors = exports.selectColors = getById("sg-select-col");

    var config = exports.config = function () {
        return new SameGameTypes.GameConfig(Number.parseInt(selectWidth.value), Number.parseInt(selectHeight.value), rndColorGtor(Number.parseInt(selectColors.value)));
    };

    var newGameOnClick = exports.newGameOnClick = function () {
        var game = api.NewGame(config());
        selectGame.selectedIndex = 0;
        updateUi(game);
    };

    var selectGameOnChange = exports.selectGameOnChange = function () {
        var inputRecord, StoneGenerator;

        var presetGtor = function (gameNum) {
            return function () {
                var index, game;
                return index = 0, game = _fableCore.Seq.item(gameNum, PresetGames.games), function (unitVar0) {
                    return index = index + 1, function (arg0) {
                        return new SameGameTypes.CellState("Stone", arg0);
                    }(function (arg0) {
                        return new SameGameTypes.Color("Color", arg0);
                    }(_fableCore.Seq.item(index - 1, game)));
                };
            }();
        };

        var gameIndex = Number.parseInt(selectGame.value);
        gameIndex >= 0 ? updateUi(api.NewGame((inputRecord = config(), StoneGenerator = presetGtor(gameIndex), new SameGameTypes.GameConfig(inputRecord.NumberOfColumns, inputRecord.NumberOfRows, StoneGenerator)))) : null;
    };

    selectGame.addEventListener('change', function (_arg1) {
        return selectGameOnChange(), null;
    }, null);
    buttonNewGame.addEventListener('click', function (_arg2) {
        return newGameOnClick(), null;
    }, null);
    updateUi(api.NewGame(defaultConfig));
});
//# sourceMappingURL=samegame.js.map