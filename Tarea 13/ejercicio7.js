var EmpleadoEmpresa = /** @class */ (function () {
    function EmpleadoEmpresa() {
        this.id = 1;
        this.nombre = "Juan Pérez";
        this.sueldoMensual = 2500;
    }
    EmpleadoEmpresa.prototype.calcularSueldoAnual = function () {
        return this.sueldoMensual * 12;
    };
    return EmpleadoEmpresa;
}());
function ejercicio7() {
    console.clear();
    var empleado = new EmpleadoEmpresa();
    console.log("El sueldo anual es: ".concat(empleado.calcularSueldoAnual()));
}
