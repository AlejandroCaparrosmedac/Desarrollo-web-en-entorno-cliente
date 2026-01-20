function saludar(nombre?: string): void {
    if (nombre !== "") {
        (document.getElementById("ej3Info")).innerHTML = "Hola," + nombre;
    } else {
        (document.getElementById("ej3Info")).innerHTML = "Hola, invitado";
    }
}

function ejercicio3(): void {
    let nombre: string = (document.getElementById("nombre") as HTMLElement).value;
    saludar(nombre);
}
