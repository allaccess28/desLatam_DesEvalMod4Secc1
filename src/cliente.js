// construimos la clase cliente
class Cliente{
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    calcularImpuesto(){
        return ((this._impuesto.brutAnual - this._impuesto.deducciones)* 0.21)
    }
}
export default Cliente;
