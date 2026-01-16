function calcularMedia(a, b) {
    return (a + b) / 2;
}
function mostrarMedia() {
    var _a;
    var a = Number(document.getElementById("valor1").value);
    var b = Number(document.getElementById("valor2").value);
    var resultado = calcularMedia(a, b);
    (_a = document.getElementById("ej2Info")) === null || _a === void 0 ? void 0 : _a.innerHTML = "La media es: " + resultado;
}
