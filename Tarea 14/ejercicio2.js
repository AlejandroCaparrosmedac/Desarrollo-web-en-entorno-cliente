window.addEventListener("DOMContentLoaded", () => {

    // Función para incrementar y mostrar el contador de visitas
    function contador() {
        if (typeof (Storage) !== "undefined") {
            // Obtiene el número de visitas del localStorage
            let visitas = localStorage.getItem("visitas");
            // Si existe, incrementa en 1; si no, establece como 1
            if (visitas) {
                visitas = parseInt(visitas) + 1;
            } else {
                visitas = 1;
            }
            // Guarda el nuevo valor en localStorage
            localStorage.setItem("visitas", visitas);
            // Muestra el contador en la página
            document.getElementById("visitas").innerText = visitas;
        } else {
            console.log("Web Storage no es soportado en este navegador.");
        }
    }

    // Función para reiniciar el contador de visitas
    function reiniciarContador() {
        if (typeof (Storage) !== "undefined") {
            // Elimina el contador del localStorage
            localStorage.removeItem("visitas");
            // Reinicia el valor mostrado a 0
            document.getElementById("visitas").innerText = "0";
            // Muestra mensaje de confirmación
            document.getElementById("ej2Info").innerHTML = '<div class="alert alert-danger">' + "Contador reiniciado.";
        }
    }

    // Asigna el evento al botón de reiniciar
    document.getElementById("restablecerContador").addEventListener("click", reiniciarContador);

    // Llama a la función contador al cargar la página
    contador();
});