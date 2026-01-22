// Ejercicio 8: Manejo de excepciones con try-catch
// Demuestra cómo usar try-catch para capturar y manejar errores

// Función que valida si un número es negativo y lo duplica
function comprobadorNumero(valor: number): number {
    // Si el número es negativo, lanzar un error
    if (valor < 0) {
        throw new Error("El número no puede ser negativo");
    } else{
        // Si es válido, devolver el doble del número
        return valor * 2;
    }
}

// Función principal del ejercicio
function ejercicio8(): void {
    console.clear();
    // Obtener el valor del input
    const inputElement = document.getElementById("ejercicio8") as HTMLInputElement;
    const valor = Number(inputElement.value);
    try {
        // Intentar ejecutar la función
        console.log(comprobadorNumero(valor));
        // Mostrar el resultado si todo va bien
        document.getElementById("ej8Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
            `<p>El doble del número ${valor} es ${comprobadorNumero(valor)}</p>` +
            `</div>`;
    }
    catch (error) {
        // Si ocurre un error, capturarlo y manejarlo
        if (error instanceof Error) {
            // Si es un objeto Error, mostrar el mensaje de error
            console.error(`Error capturado: ${error.message}`);
            document.getElementById("ej8Info")!.innerHTML = `<div class="alert alert-danger" role="alert">` +
                `<p>Error capturado: ${error.message}</p>` +
                `</div>`;
        } else {
            // Si el error es de otro tipo, mostrar mensaje genérico
            console.error("Error desconocido");
            document.getElementById("ej8Info")!.innerHTML = `<div class="alert alert-danger" role="alert">` +
                `<p>Error desconocido</p>` +
                `</div>`;
        }
    }
}