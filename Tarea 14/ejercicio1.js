windows.addEventListener("DOMContentLoaded", () => {

    function cargarPreferencias() {
        if (typeof (Storage) !== "undefined") {
            let nombre = localStorage.getItem("nombreEj1");
            let color = localStorage.getItem("color");


            if (nombre) {
                document.getElementById("nombreEj1").value = nombre;
            }

            if (color) {
                document.getElementById("color").value = color;
                // Aplicar el color automáticamente al cargar
                document.body.style.backgroundColor = color;

            }
        }
    }

    // Función para guardar los datos
    function mostrarDatos() {
        if (typeof (Storage) !== "undefined") {
            let nombre = document.getElementById("nombreEj1").value;
            let color = document.getElementById("color").value;

            if (nombre && color) {

                localStorage.setItem("nombreEj1", nombre);
                localStorage.setItem("color", color);

                document.getElementById("ej1Info").innerHTML = '<div class="alert alert-success">' + "Preferencias guardadas.";
                console.log("Preferencias guardadas, reinicie para ver los cambios.");
            } else {
                document.getElementById("ej1Info").innerHTML = '<div class="alert alert-danger">' + "Introduzca el nombre.";
                console.log("Por favor, introduce tu nombre.");
            }
        } else {
            console.log("Web Storage no es soportado en este navegador.");
        }
    }

    // Función para restablecer las preferencias
    function restablecer() {
        if (typeof (Storage) !== "undefined") {
            localStorage.removeItem("nombreEj1");
            localStorage.removeItem("color");

            document.getElementById("ej1Info").innerHTML = '<div class="alert alert-danger">' + "Preferencias eliminadas.";
            console.log("Preferencias eliminadas. Recarga la página para ver los cambios.");
        } else {
            console.log("Web Storage no es soportado en este navegador.");
        }
    }

    document.getElementById("ej1Btn").addEventListener("click", mostrarDatos);
    document.getElementById("restablecer").addEventListener("click", restablecer);

    cargarPreferencias();
});