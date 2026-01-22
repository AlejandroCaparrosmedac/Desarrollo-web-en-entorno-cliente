// Ejercicio 9: Type Guard y validación segura de tipos
// Demuestra cómo usar 'unknown' y verificar el tipo antes de operar

// Función que convierte texto a mayúsculas con validación segura
function toUpperSeguro(texto: unknown): string {
    // Verificar que sea string y no esté vacío
    if (typeof texto === 'string' && texto.trim() !== '') {
        // Verificar que no sea un número
        if (!isNaN(Number(texto))) {
            throw new Error('El valor proporcionado es un número.');
        }
        // Si todo es válido, convertir a mayúsculas
        return texto.toUpperCase();
    } else {
        // Si no es string o está vacío, lanzar error
        throw new Error('El valor proporcionado no es una cadena de texto o está vacío.');
    }
}

// Función principal del ejercicio
function ejercicio9(): void {
    console.clear();
    // Obtener el valor del input
    const inputElement = document.getElementById("ejercicio9") as HTMLInputElement;
    // Usar 'unknown' como tipo para ser más seguro
    const valor: unknown = inputElement.value;
    try {
        // Intentar convertir a mayúsculas
        console.log(toUpperSeguro(valor));
        // Mostrar el resultado si todo es válido
        document.getElementById("ej9Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
            `<p>El texto en mayúsculas es: ${toUpperSeguro(valor)}</p>` +
            `</div>`;
    } catch (error) {
        // Capturar y manejar errores
        if (error instanceof Error) {
            console.error(`Error capturado: ${error.message}`);
            document.getElementById("ej9Info")!.innerHTML = `<div class="alert alert-danger" role="alert">` +
                `<p>Error capturado: ${error.message}</p>` +
                `</div>`;
        } else {
            console.error("Error desconocido");
            document.getElementById("ej9Info")!.innerHTML = `<div class="alert alert-danger" role="alert">` +
                `<p>Error desconocido</p>` +
                `</div>`;
        }
    }
}