window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("storage", (event) => {
        if (event.key === "tareas") {
            cargarTareas();
        }
    });

    const tareaInput = document.getElementById("tareaInput");
    const btnAgregar = document.getElementById("btnAgregar");
    const listaTareas = document.getElementById("listaTareas");

    let tareas = [];

    function cargarTareas() {
        const datos = localStorage.getItem("tareas");
        tareas = datos ? JSON.parse(datos) : [];
        mostrarTareas();
    }

    function guardarTareas() {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function mostrarTareas() {
        listaTareas.innerHTML = "";

        tareas.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";

            li.innerHTML = `
            <span>${tarea.texto}</span>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        `;

            li.querySelector("button").addEventListener("click", () => {
                eliminarTarea(index);
            });

            listaTareas.appendChild(li);
        });
    }

    btnAgregar.addEventListener("click", () => {
        const texto = tareaInput.value.trim();
        if (texto === "") return;

        tareas.push({ texto });
        guardarTareas();
        mostrarTareas();
        tareaInput.value = "";
    });

    function eliminarTarea(index) {
        tareas.splice(index, 1);
        guardarTareas();
        mostrarTareas();
    }

    cargarTareas();
});