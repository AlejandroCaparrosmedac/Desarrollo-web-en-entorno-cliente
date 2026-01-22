// Ejercicio 2: Funciones con parámetros tipados y valor de retorno
// Demuestra cómo TypeScript obliga a proporcionar todos los argumentos requeridos

// Función que calcula la media aritmética de dos números
function calcularMedia(a: number, b: number): number {
    return (a + b) / 2;
}

// Función que obtiene valores del formulario y muestra la media calculada
function mostrarMedia(): void {
    // Limpiar la consola
    console.clear();
    // Obtener el valor del primer input y convertirlo a número
    const a : number = Number((document.getElementById("valor1") as HTMLInputElement).value);
    // Obtener el valor del segundo input y convertirlo a número
    const b : number = Number((document.getElementById("valor2") as HTMLInputElement).value);
    // Llamar a la función calcularMedia (TypeScript obliga a pasar ambos parámetros)
    const resultado: number = calcularMedia(a, b);
    // Mostrar el resultado en el DOM
    document.getElementById("ej2Info")!.innerHTML = '<div class="alert alert-info" role="alert">' +
        `<p>La media de ${a} y ${b} es ${resultado}</p>` +
        '</div>';
}
