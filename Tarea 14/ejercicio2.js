window.addEventListener("DOMContentLoaded", () => {

    function contador() {
        if (typeof (Storage) !== "undefined") {
            let visitas = localStorage.getItem("visitas");
            if (visitas) {
                visitas = parseInt(visitas) + 1;
            } else {
                visitas = 1;
            }
            localStorage.setItem("visitas", visitas);
            document.getElementById("visitas").innerText = visitas;
        } else {
            console.log("Web Storage no es soportado en este navegador.");
        }
    }

    function reiniciarContador() {
        if (typeof (Storage) !== "undefined") {
            localStorage.removeItem("visitas");
            document.getElementById("visitas").innerText = "0";
            document.getElementById("ej2Info").innerHTML = '<div class="alert alert-danger">' + "Contador reiniciado.";
        }
    }

    document.getElementById("restablecerContador").addEventListener("click", reiniciarContador);

    contador();
});