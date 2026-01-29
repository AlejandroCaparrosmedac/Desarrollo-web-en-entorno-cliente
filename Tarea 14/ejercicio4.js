window.addEventListener("DOMContentLoaded", () => {

    // Función para mostrar los valores actuales en localStorage y sessionStorage
    function mostrarValores() {
        if (typeof (Storage) !== "undefined") {
            // Obtiene los valores de ambos tipos de almacenamiento
            // Si no existen, muestra "Vacío"
            let valorLocal = localStorage.getItem("textoEj4") || "Vacío";
            let valorSession = sessionStorage.getItem("textoEj4") || "Vacío";

            // Muestra los valores en la página
            document.getElementById("valorLocal").innerText = valorLocal;
            document.getElementById("valorSesion").innerText = valorSession;
        } else {
            console.log("No soportado por el navegador");
        }
    }

    // Función para guardar el texto en localStorage
    function guardarEnLocalStorage() {
        if (typeof (Storage) !== "undefined") {
            // Obtiene el valor del campo de entrada
            let texto = document.getElementById("textoEj4").value;

            // Valida que el campo no esté vacío
            if (texto) {
                // Guarda en localStorage (persiste incluso después de cerrar el navegador)
                localStorage.setItem("textoEj4", texto);
                document.getElementById("ej4Info").innerHTML = '<div class="alert alert-success">' + "Datos guardados en localStorage.";
                // Actualiza la visualización
                mostrarValores();
            } else {
                document.getElementById("ej4Info").innerHTML = '<div class="alert alert-danger">' + "Introduzca texto para guardar.";
            }
        } else {
            console.log("No soportado por el navegador");
        }
    }

    // Función para guardar el texto en sessionStorage
    function guardarEnSessionStorage() {
        if (typeof (Storage) !== "undefined") {
            // Obtiene el valor del campo de entrada
            let texto = document.getElementById("textoEj4").value;

            // Valida que el campo no esté vacío
            if (texto) {
                // Guarda en sessionStorage (se pierde al cerrar el navegador)
                sessionStorage.setItem("textoEj4", texto);
                document.getElementById("ej4Info").innerHTML = '<div class="alert alert-success">' + "Datos guardados en sessionStorage.";
                // Actualiza la visualización
                mostrarValores();
            } else {
                document.getElementById("ej4Info").innerHTML = '<div class="alert alert-danger">' + "Introduzca texto para guardar.";
            }
        } else {
            console.log("No soportado por el navegador");
        }
    }

    // Asigna los eventos a los botones respectivos
    document.getElementById("guardarLocal").addEventListener("click", guardarEnLocalStorage);
    document.getElementById("guardarSession").addEventListener("click", guardarEnSessionStorage);

    // Muestra los valores guardados al cargar la página
    mostrarValores();
})