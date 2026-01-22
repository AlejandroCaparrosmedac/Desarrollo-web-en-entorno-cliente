class Persona {
    public nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    public presentarse(): void {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
        document.getElementById("ej6Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
            `<p>Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.</p>` +
            `</div>`;
    }
}
function ejercicio6(): void {
    const persona = new Persona("Ana", 30);
    persona.presentarse();
    // console.log(`Intentando acceder a la edad: ${persona.edad}`); // Esto dará un error porque 'edad' es privada
};