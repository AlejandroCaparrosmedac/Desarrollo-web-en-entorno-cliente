var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
        document.getElementById("ej6Info").innerHTML = "<div class=\"alert alert-info\" role=\"alert\">" +
            "<p>Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.</p>") +
            "</div>";
    };
    return Persona;
}());
function ejercicio6() {
    console.clear();
    var persona = new Persona("Ana", 30);
    persona.presentarse();
    // console.log(`Intentando acceder a la edad: ${persona.edad}`); // Esto dará un error porque 'edad' es privada
}
;
