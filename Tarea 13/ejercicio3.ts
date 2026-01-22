// Ejercicio 3: Parámetros opcionales en funciones
// Demuestra cómo hacer que un parámetro sea opcional usando el operador '?'

// Función que saluda a una persona, con parámetro nombre opcional
function saludar(nombre?: string): void {
    // Si el nombre existe y no está vacío, saludar al usuario
    if (nombre !== "") {
        document.getElementById("ej3Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
            `<p>Hola, ${nombre}!</p>` +
            `</div>`;
    } else {
        // Si no hay nombre, saludar como invitado
        document.getElementById("ej3Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
            `<p>Hola, invitado!</p>` +
            `</div>`;
    }
}

// Función principal del ejercicio
function ejercicio3(): void {
    console.clear();
    // Obtener el valor del input de nombre
    const nombre = document.getElementById("nombre") as HTMLInputElement;
    // Llamar a la función saludar con el valor ingresado
    saludar(nombre.value);
}
