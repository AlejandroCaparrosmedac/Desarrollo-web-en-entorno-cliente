function calcularMedia(a, b) {
    return (a + b) / 2;
}
function mostrarMedia() {
    var a = Number(document.getElementById("valor1").value);
    var b = Number(document.getElementById("valor2").value);
    var resultado = calcularMedia(a, b); //Si al llamar a la función, omitimos alguno de los dos valores, TypeScript nos avisará de que faltan argumentos
    document.getElementById("ej2Info").innerHTML = '<div class="alert alert-info" role="alert">' +
        "<p>La media de ".concat(a, " y ").concat(b, " es ").concat(resultado, "</p>") +
        '</div>';
}
