// Ejercicio 7: Implementación de interfaces en clases
// Demuestra cómo una clase implementa una interfaz usando la palabra clave 'implements'

// Definición de la interfaz Empleado
interface Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;
}

// Clase que implementa la interfaz Empleado
class EmpleadoEmpresa implements Empleado {
    // Propiedades definidas en la interfaz
    id: number;
    nombre: string;
    sueldoMensual: number;

    // Constructor que inicializa los datos del empleado
    constructor() {
        this.id = 1;
        this.nombre = "Juan Pérez";
        this.sueldoMensual = 2500;
    }

    // Método que calcula el sueldo anual multiplicando el mensual por 12
    public calcularSueldoAnual(): number {
        return this.sueldoMensual * 12;
    }
}

// Función principal del ejercicio
function ejercicio7(): void {
    console.clear();
    // Crear una instancia de EmpleadoEmpresa
    const empleado = new EmpleadoEmpresa();
    // Mostrar el sueldo anual calculado
    console.log(`El sueldo anual es: ${empleado.calcularSueldoAnual()}`);
}
