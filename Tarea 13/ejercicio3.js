function saludar(nombre) {
    if (nombre !== "") {
        document.getElementById("ej3Info").innerHTML = "<div class=\"alert alert-info\" role=\"alert\">" +
            "<p>Hola, ".concat(nombre, "!</p>") +
            "</div>";
    }
    else {
        document.getElementById("ej3Info").innerHTML = "<div class=\"alert alert-info\" role=\"alert\">" +
            "<p>Hola, invitado!</p>" +
            "</div>";
    }
}
function ejercicio3() {
    var nombre = document.getElementById("nombre");
    saludar(nombre.value);
}
