function comprobadorNumero(valor) {
    if (valor < 0) {
        throw new Error("El número no puede ser negativo");
    }
    else {
        return valor * 2;
    }
}
function ejercicio8() {
    var inputElement = document.getElementById("ejercicio8");
    var valor = Number(inputElement.value);
    try {
        console.log(comprobadorNumero(valor));
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
