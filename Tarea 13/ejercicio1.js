function mostrarDatos() {
    var nombre = "Pepe";
    var edad = 30;
    var matriculado = true;
    var listaNotas = [7, 6, 5, 2];
    var centro = "Madec";
    console.log('Nombre alumno: ' + nombre);
    console.log('Edad: ' + edad);
    console.log('Matriculado: ' + matriculado);
    console.log('Lista de notas: ' + listaNotas);
    console.log('Centro: ' + centro);
    document.getElementById("ej1Info").innerHTML = '<div class="alert alert-info" role="alert">' +
        "<p>Nombre alumno: ".concat(nombre, "</p>") +
        "<p>Edad: ".concat(edad, "</p>") +
        "<p>Matriculado: ".concat(matriculado, "</p>") +
        "<p>Lista de notas: ".concat(listaNotas, "</p>") +
        "<p>Centro: ".concat(centro, "</p>") +
        '</div>';
}
