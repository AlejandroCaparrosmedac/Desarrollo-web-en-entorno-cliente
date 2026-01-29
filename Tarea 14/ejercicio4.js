window.addEventListener("DOMContentLoaded", () => {

    function mostrarValores() {
        if (typeof (Storage) !== "undefined") {
            let valorLocal = localStorage.getItem("textoEj4") || "Vacío";
            let valorSession = sessionStorage.getItem("textoEj4") || "Vacío";

            document.getElementById("valorLocal").innerText = valorLocal;
            document.getElementById("valorSesion").innerText = valorSession;
        } else {
            console.log("No soportado por el navegador");
        }
    }

    function guardarEnLocalStorage() {
        if (typeof (Storage) !== "undefined") {
            let texto = document.getElementById("textoEj4").value;

            if (texto) {
                localStorage.setItem("textoEj4", texto);
                document.getElementById("ej4Info").innerHTML = '<div class="alert alert-success">' + "Datos guardados en localStorage.";
                mostrarValores();
            } else {
                document.getElementById("ej4Info").innerHTML = '<div class="alert alert-danger">' + "Introduzca texto para guardar.";
            }
        } else {
            console.log("No soportado por el navegador");
        }
    }

    function guardarEnSessionStorage() {
        if (typeof (Storage) !== "undefined") {
            let texto = document.getElementById("textoEj4").value;

            if (texto) {
                sessionStorage.setItem("textoEj4", texto);
                document.getElementById("ej4Info").innerHTML = '<div class="alert alert-success">' + "Datos guardados en sessionStorage.";
                mostrarValores();
            } else {
                document.getElementById("ej4Info").innerHTML = '<div class="alert alert-danger">' + "Introduzca texto para guardar.";
            }
        } else {
            console.log("No soportado por el navegador");
        }
    }
    document.getElementById("guardarLocal").addEventListener("click", guardarEnLocalStorage);
    document.getElementById("guardarSession").addEventListener("click", guardarEnSessionStorage);

    mostrarValores();
})