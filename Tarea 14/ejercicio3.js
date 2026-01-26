window.addEventListener("DOMContentLoaded", () => {

    function cargarDatosEj3() {
        if (typeof (Storage) !== "undefined") {
            let nombre = sessionStorage.getItem("nombreEj3");
            let curso = sessionStorage.getItem("curso");

            if (nombre) {
                document.getElementById("nombreEj3").value = nombre;
            }
            if (curso) {
                document.getElementById("curso").value = curso;
            }
        } else {
            console.log("no soportado");
        }
    }


    function mostrarDatosEj3() {
        if (typeof (Storage) !== "undefined") {
            let nombre = document.getElementById("nombreEj3").value;
            let curso = document.getElementById("curso").value;

            if (nombre && curso) {

                sessionStorage.setItem("nombreEj3", nombre);
                sessionStorage.setItem("curso", curso);
                console.log("Datos guardados");
            } else {
                console.log("error");
            }

        } else {
            console.log("No soportado");
        }
    }

    // A diferencia de localStorage, al hacer uso de sessionStorage, solo guardamos los datos durante la sesión, es decir, una vez que se cierra el navegador
    // los datos guardados se pierden.
    document.getElementById("ej3Btn").addEventListener("click", mostrarDatosEj3);

});