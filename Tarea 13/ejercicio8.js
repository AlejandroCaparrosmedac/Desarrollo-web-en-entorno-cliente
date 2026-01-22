function comprobadorNumero(valor) {
    if (valor < 0) {
        throw new Error("El número no puede ser negativo");
    }
    else {
        return valor * 2;
    }
}
function ejercicio8() {
    console.clear();
    var inputElement = document.getElementById("ejercicio8");
    var valor = Number(inputElement.value);
    try {
        console.log(comprobadorNumero(valor));
        document.getElementById("ej8Info").innerHTML = "<div class=\"alert alert-info\" role=\"alert\">" +
            "<p>El doble del n\u00FAmero ".concat(valor, " es ").concat(comprobadorNumero(valor), "</p>") +
            "</div>";
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error capturado: ".concat(error.message));
            document.getElementById("ej8Info").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">" +
                "<p>Error capturado: ".concat(error.message, "</p>") +
                "</div>";
        }
        else {
            console.error("Error desconocido");
            document.getElementById("ej8Info").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">" +
                "<p>Error desconocido</p>" +
                "</div>";
        }
    }
}
