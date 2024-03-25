"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));
var _cliente = _interopRequireDefault(require("./cliente.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto = new _impuestos["default"](300, 20);
console.log("El impuesto es de ".concat(impuesto._brutAnual, " , mientras que las deducciones son de ").concat(impuesto._deducciones));
var cliente = new _cliente["default"]("Ferreterias Imperial", impuesto);
console.log("Los impuestos de ".concat(cliente._nombre, " son ").concat(cliente.calcularImpuesto()));