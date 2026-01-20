interface Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;
}

class EmpleadoEmpresa implements Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;

    constructor() {
        this.id = 1;
        this.nombre = "Juan Pérez";
        this.sueldoMensual = 2500;
    }

    public calcularSueldoAnual(): number {
        return this.sueldoMensual * 12;
    }
}

function ejercicio7(): void {
    const empleado = new EmpleadoEmpresa();
    console.log(`El sueldo anual es: ${empleado.calcularSueldoAnual()}`);
}
