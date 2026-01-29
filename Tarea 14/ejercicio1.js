window.addEventListener("DOMContentLoaded", () => {

    // Carga las preferencias guardadas en localStorage al abrir la página
    function cargarPreferencias() {
        // Verifica que el navegador soporte Web Storage
        if (typeof (Storage) !== "undefined") {
            // Recupera el nombre y color guardados del localStorage
            let nombre = localStorage.getItem("nombreEj1");
            let color = localStorage.getItem("color");


            // Si existe nombre guardado, lo carga en el campo de entrada
            if (nombre) {
                document.getElementById("nombreEj1").value = nombre;
            }

            // Si existe color guardado, lo carga en el selector y lo aplica al fondo
            if (color) {
                document.getElementById("color").value = color;
                document.body.style.backgroundColor = color;
            }
        }
    }

    // Función para guardar los datos de preferencias en localStorage
    function mostrarDatos() {
        if (typeof (Storage) !== "undefined") {
            // Obtiene el nombre y color de los campos del formulario
            let nombre = document.getElementById("nombreEj1").value;
            let color = document.getElementById("color").value;

            // Valida que ambos campos estén completos
            if (nombre && color) {
                // Guarda los datos en localStorage para persistencia
                localStorage.setItem("nombreEj1", nombre);
                localStorage.setItem("color", color);

                // Muestra mensaje de confirmación
                document.getElementById("ej1Info").innerHTML = '<div class="alert alert-success">' + "Preferencias guardadas.";
            } else {
                document.getElementById("ej1Info").innerHTML = '<div class="alert alert-danger">' + "Introduzca el nombre.";
            }
        } else {
            console.log("Web Storage no es soportado en este navegador.");
        }
    }

    // Función para restablecer (borrar) las preferencias guardadas
    function restablecer() {
        if (typeof (Storage) !== "undefined") {
            // Elimina los datos del localStorage
            localStorage.removeItem("nombreEj1");
            localStorage.removeItem("color");
            document.body.style.background = "white"; 
            document.getElementById("nombreEj1").value = ""; 
            document.getElementById("color").value = "#000000"; 

            document.getElementById("ej1Info").innerHTML = '<div class="alert alert-danger">' + "Preferencias eliminadas.";
        } else {
            console.log("Web Storage no es soportado en este navegador.");
        }
    }

    // Asigna eventos de clic a los botones
    document.getElementById("ej1Btn").addEventListener("click", mostrarDatos);
    document.getElementById("restablecer").addEventListener("click", restablecer);

    // Carga las preferencias al abrir la página
    cargarPreferencias();
});