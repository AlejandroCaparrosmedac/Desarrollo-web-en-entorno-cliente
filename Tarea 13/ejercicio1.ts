// Ejercicio 1: Declaración de variables con diferentes tipos de datos en TypeScript
// Demuestra el uso de tipos primitivos (string, number, boolean) y arrays
function mostrarDatos():void {
    // Declaración de variable de tipo string
    let nombre: string = "Pepe";
    // Declaración de variable de tipo number
    let edad: number = 30;
    // Declaración de variable de tipo boolean
    let matriculado: boolean = true;
    // Declaración de array de números
    let listaNotas: number[] = [7,6,5,2];
    // Declaración de constante de tipo string
    const centro: string = "Madec";

    // Mostrar datos en la consola
    console.log('Nombre alumno: ' + nombre);
    console.log('Edad: '+ edad);
    console.log('Matriculado: '+ matriculado);
    console.log('Lista de notas: '+ listaNotas);
    console.log('Centro: '+ centro);

    // Mostrar datos en el DOM con formato HTML
    document.getElementById("ej1Info")!.innerHTML = '<div class="alert alert-info" role="alert">' +
        `<p>Nombre alumno: ${nombre}</p>` +
        `<p>Edad: ${edad}</p>` +
        `<p>Matriculado: ${matriculado}</p>` +
        `<p>Lista de notas: ${listaNotas}</p>` +
        `<p>Centro: ${centro}</p>` +
        '</div>';
}