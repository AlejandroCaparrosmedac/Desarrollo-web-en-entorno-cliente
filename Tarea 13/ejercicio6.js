// Ejercicio 6: Clases y modificadores de acceso (public y private)
// Demuestra cómo usar clases, constructores y propiedades públicas/privadas
// Definición de la clase Persona
var Persona = /** @class */ (function () {
    // Constructor que inicializa las propiedades
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método público que muestra los datos de la persona
    Persona.prototype.presentarse = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
        document.getElementById("ej6Info").innerHTML = "<div class=\"alert alert-info\" role=\"alert\">" +
            "<p>Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.</p>") +
            "</div>";
    };
    return Persona;
}());
// Función principal del ejercicio
function ejercicio6() {
    console.clear();
    // Crear una nueva instancia de Persona
    var persona = new Persona("Alejandro", 29);
    // Llamar al método presentarse()
    persona.presentarse();
    // No se puede acceder a persona.edad porque es privada (descomenta causaría error)
    // console.log(`Intentando acceder a la edad: ${persona.edad}`);
}
;
