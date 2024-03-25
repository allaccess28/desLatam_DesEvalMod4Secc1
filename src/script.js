import Impuesto from "./impuestos.js";
import Cliente from "./cliente.js";

let impuesto = new Impuesto(300, 20);
console.log(
  `El impuesto es de ${impuesto._brutAnual} , mientras que las deducciones son de ${impuesto._deducciones}`
);

let cliente = new Cliente("Ferreterias Imperial", impuesto);
console.log(
  `Los impuestos de ${cliente._nombre} son ${cliente.calcularImpuesto()}`
);
