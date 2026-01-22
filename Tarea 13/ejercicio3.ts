function saludar(nombre?: string): void {
    if (nombre !== "") {
        document.getElementById("ej3Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
            `<p>Hola, ${nombre}!</p>` +
            `</div>`;
    } else {
        document.getElementById("ej3Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
            `<p>Hola, invitado!</p>` +
            `</div>`;
    }
}

function ejercicio3(): void {
    const nombre = document.getElementById("nombre") as HTMLInputElement;
    saludar(nombre.value);
}
