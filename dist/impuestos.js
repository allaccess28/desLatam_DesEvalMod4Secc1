"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//creamos la clase impuestos
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(brutAnual, deducciones) {
    _classCallCheck(this, Impuestos);
    this._brutAnual = brutAnual;
    this._deducciones = deducciones;
  }
  return _createClass(Impuestos, [{
    key: "brutAnual",
    get: function get() {
      return this._brutAnual;
    },
    set: function set(nuevo_brutAnual) {
      this._brutAnual = nuevo_brutAnual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nuevo_deducciones) {
      this._deducciones = nuevo_deducciones;
    }
  }]);
}();
var _default = exports["default"] = Impuestos;