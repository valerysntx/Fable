define(["exports", "fable-core"], function (exports, _fableCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.s = exports.h = exports.El = exports.DomNode = exports.DomAttribute = undefined;
  exports.render = render;
  exports.renderTo = renderTo;
  exports.text = text;
  exports.op_EqualsGreater = op_EqualsGreater;
  exports.op_EqualsBangGreater = op_EqualsBangGreater;

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DomAttribute = exports.DomAttribute = function DomAttribute(caseName, fields) {
    _classCallCheck(this, DomAttribute);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(DomAttribute.prototype, ["FSharpUnion"], "Fable.Html.DomAttribute");

  var DomNode = exports.DomNode = function DomNode(caseName, fields) {
    _classCallCheck(this, DomNode);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(DomNode.prototype, ["FSharpUnion"], "Fable.Html.DomNode");

  function render(node) {
    return node.Case === "Element" ? function () {
      var tag = node.Fields[1];
      var ns = node.Fields[0];
      var children = node.Fields[3];
      var attrs = node.Fields[2];
      var el = ns === "" ? document.createElement(tag) : document.createElementNS(ns, tag);
      var rc = children.map(function (node_1) {
        return render(node_1);
      });

      for (var idx = 0; idx <= rc.length - 1; idx++) {
        var c = rc[idx];
        el.appendChild(c);
      }

      for (var idx = 0; idx <= attrs.length - 1; idx++) {
        var forLoopVar = attrs[idx];
        var k = forLoopVar[0];
        var a = forLoopVar[1];

        if (a.Case === "Event") {
          var f = a.Fields[0];
          el.addEventListener(k, function (delegateArg0) {
            f(el)(delegateArg0);
          });
        } else {
          var v = a.Fields[0];

          if (ns === "") {
            el.setAttribute(k, v);
          } else {
            el.setAttributeNS(null, k, v);
          }
        }
      }

      return el;
    }() : function () {
      var s = node.Fields[0];
      return document.createTextNode(s);
    }();
  }

  function renderTo(node, dom) {
    while (node.lastChild != null) {
      node.removeChild(node.lastChild);
    }

    var el = render(dom);
    node.appendChild(el);
  }

  function text(s) {
    return new DomNode("Text", [s]);
  }

  function op_EqualsGreater(k, v) {
    return [k, new DomAttribute("Property", [_fableCore.Util.toString(v)])];
  }

  function op_EqualsBangGreater(k, f) {
    return [k, new DomAttribute("Event", [f])];
  }

  var El = exports.El = function () {
    function El(ns) {
      _classCallCheck(this, El);

      this.ns = ns;
    }

    _createClass(El, [{
      key: "NS",
      get: function get() {
        return this.ns;
      }
    }], [{
      key: "op_Dynamic",
      value: function op_Dynamic(el, n) {
        return function (a) {
          return function (b) {
            return new DomNode("Element", [el.NS, n, Array.from(a), Array.from(b)]);
          };
        };
      }
    }]);

    return El;
  }();

  _fableCore.Util.setInterfaces(El.prototype, [], "Fable.Html.El");

  var h = exports.h = new El("");
  var s = exports.s = new El("http://www.w3.org/2000/svg");
});
//# sourceMappingURL=html.js.map