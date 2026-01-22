function toUpperSeguro(texto) {
    if (typeof texto === 'string' && texto !== '') {
        if (!isNaN(Number(texto))) {
            throw new Error('El valor proporcionado es un número.');
        }
        return texto.toUpperCase();
    }
    else {
        throw new Error('El valor proporcionado no es una cadena de texto o está vacío.');
    }
}
function ejercicio9() {
    var inputElement = document.getElementById("ejercicio9");
    var valor = inputElement.value;
    try {
        console.log(toUpperSeguro(valor)); // Si en vez de 'valor' ponemos un número, se lanza el error
        document.getElementById("ej9Info").innerHTML = "<div class=\"alert alert-info\" role=\"alert\">" +
            "<p>El texto en may\u00FAsculas es: ".concat(toUpperSeguro(valor), "</p>") +
            "</div>";
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error capturado: ".concat(error.message));
            document.getElementById("ej9Info").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">" +
                "<p>Error capturado: ".concat(error.message, "</p>") +
                "</div>";
        }
        else {
            console.error("Error desconocido");
            document.getElementById("ej9Info").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">" +
                "<p>Error desconocido</p>" +
                "</div>";
        }
    }
}
