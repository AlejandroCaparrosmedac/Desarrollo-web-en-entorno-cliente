function toUpperSeguro(texto) {
    if (typeof texto === 'string') {
        return texto.toUpperCase();
    }
    else {
        throw new Error('El valor proporcionado no es una cadena de texto.');
    }
}
function ejercicio9() {
    var inputElement = document.getElementById("ejercicio9");
    var valor = inputElement.value;
    try {
        console.log(toUpperSeguro(valor)); // Si en vez de 'valor' ponemos un número, se lanza el error
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error capturado: ".concat(error.message));
        }
        else {
            console.error("Error desconocido");
        }
    }
}
