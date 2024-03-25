//creamos la clase impuestos
class Impuestos {
  constructor(brutAnual, deducciones) {
    this._brutAnual = brutAnual;
    this._deducciones = deducciones;
  }
  get brutAnual() {
    return this._brutAnual;
  }
  set brutAnual(nuevo_brutAnual) {
    this._brutAnual = nuevo_brutAnual;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevo_deducciones) {
    this._deducciones = nuevo_deducciones;
  }
}
export default Impuestos;
