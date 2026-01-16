function ejercicio3() {
    var nombre = document.getElementById("nombre").value;
    saludar(nombre);
}
function saludar(nombre) {
    if (nombre !== "") {
        (document.getElementById("ej3Info")).innerHTML = "Hola," + nombre;
    }
    else {
        (document.getElementById("ej3Info")).innerHTML = "Hola, invitado";
    }
}
