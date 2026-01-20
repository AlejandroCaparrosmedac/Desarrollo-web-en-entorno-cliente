var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
function ejercicio6() {
    var persona = new Persona("Ana", 30);
    persona.presentarse();
    console.log("Intentando acceder a la edad: ".concat(persona.edad));
}
;
