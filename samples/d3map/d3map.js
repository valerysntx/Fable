define(["exports", "d3", "topojson", "fable-core", "queue"], function (exports, _d, _topojson, _fableCore, _queue) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.dataLoaded = exports.title = exports.path = exports.projection = exports.ctx = exports.canvas = exports.height = exports.width = undefined;

  var $import1 = _interopRequireWildcard(_d);

  var _topojson2 = _interopRequireDefault(_topojson);

  var _queue2 = _interopRequireDefault(_queue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var patternInput = [500, 500];
  var width = exports.width = patternInput[0];
  var height = exports.height = patternInput[1];
  var canvas = exports.canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = width;
  canvas.height = height;
  var ctx = exports.ctx = canvas.getContext('2d');

  var projection = exports.projection = _d.geo.orthographic().translate([width / 2, height / 2]).scale(width / 2 - 20).clipAngle(90).precision(0.6);

  var path = exports.path = _d.geo.path().projection(projection).context(ctx);

  var title = exports.title = $import1.select(".country-name");

  var dataLoaded = exports.dataLoaded = function (world, names) {
    var globe = {
      type: "Sphere"
    };

    var landFeature = _topojson2.default.feature(world, world.objects.land);

    var borders = _topojson2.default.mesh(world, world.objects.countries, function (delegateArg0, delegateArg1) {
      return function (x) {
        return function (y) {
          return x !== y;
        };
      }(delegateArg0)(delegateArg1);
    });

    var countries = Array.from(_fableCore.Seq.sortWith(function (a, b) {
      return _fableCore.Util.compareTo(a.name.toString(), b.name.toString());
    }, _topojson2.default.feature(world, world.objects.countries).features.filter(function (d) {
      return _fableCore.Seq.exists(function (n) {
        return d.id.toString() === n.id.toString() ? function () {
          d.name = n.name;
          return true;
        }() : false;
      }, names);
    })));

    var draw = function (color) {
      return function (width_1) {
        return function (line) {
          return function (fill) {
            if (fill) {
              ctx.fillStyle = color;
            } else {
              ctx.strokeStyle = color;
            }

            ctx.lineWidth = width_1;
            ctx.beginPath();
            path(line, null);

            if (fill) {
              ctx.fill();
            } else {
              ctx.stroke();
            }
          };
        };
      };
    };

    var render = function (country) {
      return function (angle) {
        projection.rotate(angle);
        ctx.clearRect(0, 0, width, height);
        draw("#ACA2AD")(0)(landFeature)(true);
        draw("#9E4078")(0)(country)(true);
        draw("#EAF1F7")(0.5)(borders)(false);
        draw("#726B72")(2)(globe)(false);
        return null;
      };
    };

    var transition = function (i) {
      return $import1.transition().duration(1250).each("start", function (_arg2, _arg1) {
        var name = countries[i].name;
        return title.text(name);
      }).tween("rotate", function (_arg3) {
        var patternInput_1 = _d.geo.centroid(countries[i]);

        var p2 = patternInput_1[1];
        var p1 = patternInput_1[0];
        var r = $import1.interpolate(projection.rotate(), [-p1, -p2]);
        return function (delegateArg0) {
          return function (t) {
            return render(countries[i])(r(t));
          }(delegateArg0);
        };
      }).transition().each("end", function (_arg5, _arg4) {
        return transition((i + 1) % countries.length);
      });
    };

    return transition(0);
  };

  (0, _queue2.default)().defer(function (delegateArg0, delegateArg1) {
    return function (url) {
      return function (callback) {
        return $import1.json(url, callback);
      };
    }(delegateArg0)(delegateArg1);
  }, "data/world-110m.json").defer($import1.tsv, "data/world-country-names.tsv").await(function (delegateArg0, delegateArg1, delegateArg2) {
    return function (error) {
      return function (world) {
        return function (names) {
          if (error) {
            throw error;
          }

          return dataLoaded(world, names);
        };
      };
    }(delegateArg0)(delegateArg1)(delegateArg2);
  });
});
//# sourceMappingURL=d3map.js.map