var AlumnoApp = /** @class */ (function () {
    function AlumnoApp(id, nombre, notas) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
        this.media = 0;
    }
    AlumnoApp.prototype.calcularMedia = function () {
        var suma = this.notas.reduce(function (acc, nota) { return acc + nota; }, 0);
        this.media = suma / this.notas.length;
        return this.media;
    };
    AlumnoApp.prototype.mostrarAlumno = function () {
        console.log("ID: ".concat(this.id, ", Nombre: ").concat(this.nombre, ", Notas: ").concat(this.notas.join(", "), ", Media: ").concat(this.calcularMedia().toFixed(2)));
    };
    return AlumnoApp;
}());
function ejercicio10() {
    var alumno = [
        new AlumnoApp(1, "Ana Gómez", [8, 9, 7, 9]),
        new AlumnoApp(2, "Luis Pérez", [8, 6, 5, 9]),
        new AlumnoApp(3, "Marta Rodríguez", [0, 9, 8, 7])
    ];
    alumno.forEach(function (a) {
        a.calcularMedia();
        a.mostrarAlumno();
    });
    var mediaGlobal = alumno.reduce(function (acc, a) { return acc + a.media; }, 0) / alumno.length;
    console.log("Media global de todos los alumnos: ".concat(mediaGlobal.toFixed(2)));
}
