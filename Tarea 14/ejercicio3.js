window.addEventListener("DOMContentLoaded", () => {

    // Función para cargar datos guardados en sessionStorage
    function cargarDatosEj3() {
        if (typeof (Storage) !== "undefined") {
            // Obtiene el nombre y curso del sessionStorage
            let nombre = sessionStorage.getItem("nombreEj3");
            let curso = sessionStorage.getItem("curso");

            // Si existe nombre guardado, lo carga en el campo de entrada
            if (nombre) {
                document.getElementById("nombreEj3").value = nombre;
            }
            // Si existe curso guardado, lo carga en el selector
            if (curso) {
                document.getElementById("curso").value = curso;
            }
        } else {
            console.log("no soportado");
        }
    }

    // Llama a la función para cargar datos al abrir la página
    cargarDatosEj3();

    // Función para guardar los datos en sessionStorage
    function mostrarDatosEj3() {
        if (typeof (Storage) !== "undefined") {
            // Obtiene los valores de los campos del formulario
            let nombre = document.getElementById("nombreEj3").value;
            let curso = document.getElementById("curso").value;

            // Valida que ambos campos estén completos
            if (nombre && curso) {
                // Guarda en sessionStorage (se perderá al cerrar el navegador)
                sessionStorage.setItem("nombreEj3", nombre);
                sessionStorage.setItem("curso", curso);
                document.getElementById("ej3Info").innerHTML = '<div class="alert alert-success">' + "Datos guardados en sessionStorage.";
            } else {
                document.getElementById("ej3Info").innerHTML = '<div class="alert alert-danger">' + "Introduzca todos los datos.";
            }
        } else {
            console.log("No soportado");
        }
    }

    // Asigna el evento al botón de guardar
    // Nota: A diferencia de localStorage, sessionStorage solo guarda datos durante la sesión
    // Los datos se pierden cuando se cierra el navegador
    document.getElementById("ej3Btn").addEventListener("click", mostrarDatosEj3);

});