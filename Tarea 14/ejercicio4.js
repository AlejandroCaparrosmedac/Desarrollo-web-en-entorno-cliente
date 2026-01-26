window.addEventListener("DOMContentLoaded", () => {

    function guardarEnLocalStorage() {
        if (typeof (Storage) !== "undefined") {
            let texto = document.getElementById("textoEj4").value;

            if (texto) {
                localStorage.setItem("textoEj4", texto);
                console.log("Datos guardados");
            } else {
                console.log("Introduzca texto");
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
                console.log("Datos temporales guardados");
            } else {
                console.log("Introduzca texto");
            }
        } else {
            console.log("No soportado por el navegador");
        }
    }
    document.getElementById("guardarLocal").addEventListener("click", guardarEnLocalStorage);
    document.getElementById("guardarSession").addEventListener("click", guardarEnSessionStorage);

})