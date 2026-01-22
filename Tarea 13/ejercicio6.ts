// Ejercicio 6: Clases y modificadores de acceso (public y private)
// Demuestra cómo usar clases, constructores y propiedades públicas/privadas

// Definición de la clase Persona
class Persona {
    // Propiedad pública - accesible desde cualquier lugar
    public nombre: string;
    // Propiedad privada - solo accesible dentro de la clase
    private edad: number;

    // Constructor que inicializa las propiedades
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método público que muestra los datos de la persona
    public presentarse(): void {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
        document.getElementById("ej6Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
            `<p>Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.</p>` +
            `</div>`;
    }
}

// Función principal del ejercicio
function ejercicio6(): void {
    console.clear();
    // Crear una nueva instancia de Persona
    const persona = new Persona("Alejandro", 29);
    // Llamar al método presentarse()
    persona.presentarse();
    // No se puede acceder a persona.edad porque es privada (descomenta causaría error)
    // console.log(`Intentando acceder a la edad: ${persona.edad}`);
};