define(["exports", "fable-core"], function (exports, _fableCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.go = exports.height = exports.width = exports.h = exports.w = exports.palette = exports.c = exports.ComplexModule = exports.Complex = undefined;
  exports.iterate = iterate;
  exports.countIterations = countIterations;
  exports.op_MinusMinus = op_MinusMinus;
  exports.op_MinusMinusGreater = op_MinusMinusGreater;
  exports.setPixel = setPixel;
  exports.op_Dynamic = op_Dynamic;
  exports.render = render;

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

  var Complex = exports.Complex = function () {
    function Complex(caseName, fields) {
      _classCallCheck(this, Complex);

      this.Case = caseName;
      this.Fields = fields;
    }

    _createClass(Complex, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsUnions(this, other);
      }
    }, {
      key: "CompareTo",
      value: function CompareTo(other) {
        return _fableCore.Util.compareUnions(this, other);
      }
    }], [{
      key: "Abs",
      value: function Abs(_arg1) {
        var r = _arg1.Fields[0];
        var i = _arg1.Fields[1];
        var patternInput = [Math.abs(r), Math.abs(i)];
        var num2 = patternInput[1];
        var num1 = patternInput[0];

        if (num1 > num2) {
          var num3 = num2 / num1;
          return num1 * Math.sqrt(1 + num3 * num3);
        } else {
          if (num2 === 0) {
            return num1;
          } else {
            var num4 = num1 / num2;
            return num2 * Math.sqrt(1 + num4 * num4);
          }
        }
      }
    }, {
      key: "op_Addition",
      value: function op_Addition(_arg2, _arg3) {
        var r1 = _arg2.Fields[0];
        var i1 = _arg2.Fields[1];
        var r2 = _arg3.Fields[0];
        var i2 = _arg3.Fields[1];
        return new Complex("Complex", [r1 + r2, i1 + i2]);
      }
    }]);

    return Complex;
  }();

  _fableCore.Util.setInterfaces(Complex.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "Hokusai.Complex");

  var ComplexModule = exports.ComplexModule = function ($exports) {
    var Pow = $exports.Pow = function Pow(_arg1, power) {
      var r = _arg1.Fields[0];
      var i = _arg1.Fields[1];
      var num = Complex.Abs(new Complex("Complex", [r, i]));
      var num2 = Math.atan2(i, r);
      var num3 = power * num2;
      var num4 = Math.pow(num, power);
      return new Complex("Complex", [num4 * Math.cos(num3), num4 * Math.sin(num3)]);
    };

    return $exports;
  }({});

  var c = exports.c = new Complex("Complex", [-0.70176, -0.3842]);

  function iterate(x, y) {
    var loop = function loop(current) {
      return _fableCore.Seq.delay(function (unitVar) {
        return _fableCore.Seq.append(_fableCore.Seq.singleton(current), _fableCore.Seq.delay(function (unitVar_1) {
          return loop(Complex.op_Addition(ComplexModule.Pow(current, 2), c));
        }));
      });
    };

    return loop(new Complex("Complex", [x, y]));
  }

  function countIterations(max, x, y) {
    return _fableCore.Seq.count(_fableCore.Seq.takeWhile(function (v) {
      return Complex.Abs(v) < 2;
    }, _fableCore.Seq.take(max - 1, iterate(x, y))));
  }

  function op_MinusMinus(clr, count) {
    return [clr, count];
  }

  function op_MinusMinusGreater(_arg1, count, r2, g2, b2) {
    var r1 = _arg1[0];
    var g1 = _arg1[1];
    var b1 = _arg1[2];
    return _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.map(function (c_1) {
        var k = c_1 / count;

        var mid = function mid(v1) {
          return function (v2) {
            return v1 + (v2 - v1) * k;
          };
        };

        return [mid(r1)(r2), mid(g1)(g2), mid(b1)(b2)];
      }, _fableCore.Seq.range(0, count - 1));
    }));
  }

  var palette = exports.palette = Array.from(_fableCore.Seq.delay(function (unitVar) {
    return _fableCore.Seq.append(function () {
      var tupledArg = op_MinusMinus([245, 219, 184], 3);
      var tupledArg_1 = [245, 219, 184];
      var arg00_ = tupledArg[0];
      var count = tupledArg[1];
      var r2 = tupledArg_1[0];
      var g2 = tupledArg_1[1];
      var b2 = tupledArg_1[2];
      return op_MinusMinusGreater(arg00_, count, r2, g2, b2);
    }(), _fableCore.Seq.delay(function (unitVar_1) {
      return _fableCore.Seq.append(function () {
        var tupledArg = op_MinusMinus([245, 219, 184], 4);
        var tupledArg_1 = [138, 173, 179];
        var arg00_ = tupledArg[0];
        var count = tupledArg[1];
        var r2 = tupledArg_1[0];
        var g2 = tupledArg_1[1];
        var b2 = tupledArg_1[2];
        return op_MinusMinusGreater(arg00_, count, r2, g2, b2);
      }(), _fableCore.Seq.delay(function (unitVar_2) {
        return _fableCore.Seq.append(function () {
          var tupledArg = op_MinusMinus([138, 173, 179], 4);
          var tupledArg_1 = [2, 12, 74];
          var arg00_ = tupledArg[0];
          var count = tupledArg[1];
          var r2 = tupledArg_1[0];
          var g2 = tupledArg_1[1];
          var b2 = tupledArg_1[2];
          return op_MinusMinusGreater(arg00_, count, r2, g2, b2);
        }(), _fableCore.Seq.delay(function (unitVar_3) {
          return _fableCore.Seq.append(function () {
            var tupledArg = op_MinusMinus([2, 12, 74], 4);
            var tupledArg_1 = [61, 102, 130];
            var arg00_ = tupledArg[0];
            var count = tupledArg[1];
            var r2 = tupledArg_1[0];
            var g2 = tupledArg_1[1];
            var b2 = tupledArg_1[2];
            return op_MinusMinusGreater(arg00_, count, r2, g2, b2);
          }(), _fableCore.Seq.delay(function (unitVar_4) {
            return _fableCore.Seq.append(function () {
              var tupledArg = op_MinusMinus([61, 102, 130], 8);
              var tupledArg_1 = [249, 243, 221];
              var arg00_ = tupledArg[0];
              var count = tupledArg[1];
              var r2 = tupledArg_1[0];
              var g2 = tupledArg_1[1];
              var b2 = tupledArg_1[2];
              return op_MinusMinusGreater(arg00_, count, r2, g2, b2);
            }(), _fableCore.Seq.delay(function (unitVar_5) {
              return _fableCore.Seq.append(function () {
                var tupledArg = op_MinusMinus([249, 243, 221], 32);
                var tupledArg_1 = [138, 173, 179];
                var arg00_ = tupledArg[0];
                var count = tupledArg[1];
                var r2 = tupledArg_1[0];
                var g2 = tupledArg_1[1];
                var b2 = tupledArg_1[2];
                return op_MinusMinusGreater(arg00_, count, r2, g2, b2);
              }(), _fableCore.Seq.delay(function (unitVar_6) {
                var tupledArg = op_MinusMinus([138, 173, 179], 32);
                var tupledArg_1 = [61, 102, 130];
                var arg00_ = tupledArg[0];
                var count = tupledArg[1];
                var r2 = tupledArg_1[0];
                var g2 = tupledArg_1[1];
                var b2 = tupledArg_1[2];
                return op_MinusMinusGreater(arg00_, count, r2, g2, b2);
              }));
            }));
          }));
        }));
      }));
    }));
  }));
  var w = exports.w = [-0.4, 0.4];
  var h = exports.h = [-0.95, -0.35];
  var width = exports.width = 400;
  var height = exports.height = 300;

  function setPixel(img, x, y, width_1, r, g, b) {
    var index = (x + y * Math.floor(width_1)) * 4;
    img.data[index + 0] = r;
    img.data[index + 1] = g;
    img.data[index + 2] = b;
    img.data[index + 3] = 255;
  }

  function op_Dynamic(doc, name) {
    return doc.getElementById(name);
  }

  function render() {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var canv = op_Dynamic(document, "canvas");
        var ctx = canv.getContext('2d');
        var img = ctx.createImageData(width, height);
        return builder_.For(_fableCore.Seq.range(0, Math.floor(width) - 1), function (_arg1) {
          var x = _arg1;
          return builder_.Combine(builder_.For(_fableCore.Seq.range(0, Math.floor(height) - 1), function (_arg2) {
            var y = _arg2;
            var x_ = x / width * (w[1] - w[0]) + w[0];
            var y_ = y / height * (h[1] - h[0]) + h[0];
            var it = countIterations(palette.length, x_, y_);
            {
              var tupledArg = palette[it];
              var r = tupledArg[0];
              var g = tupledArg[1];
              var b = tupledArg[2];
              setPixel(img, x, y, width, r, g, b);
            }
            return builder_.Zero();
          }), builder_.Delay(function (unitVar_1) {
            return builder_.Bind(_fableCore.Async.sleep(1), function (_arg3) {
              ctx.putImageData(img, 0, 0);
              return builder_.Zero();
            });
          }));
        });
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  var go = exports.go = op_Dynamic(document, "go");
  go.addEventListener('click', function (_arg1) {
    (function (arg00) {
      _fableCore.Async.startImmediate(arg00);
    })(render());

    return null;
  }, null);
});
//# sourceMappingURL=hokusai.js.map