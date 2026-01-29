window.addEventListener("DOMContentLoaded", () => {
    // Escucha cambios en localStorage desde otras pestañas/ventanas del navegador
    window.addEventListener("storage", (event) => {
        // Si se modifica la clave "tareas", recarga la lista
        if (event.key === "tareas") {
            cargarTareas();
        }
    });

    // Obtiene referencias a los elementos del DOM
    const tareaInput = document.getElementById("tareaInput");
    const btnAgregar = document.getElementById("btnAgregar");
    const listaTareas = document.getElementById("listaTareas");

    // Array para almacenar las tareas
    let tareas = [];

    // Función para cargar las tareas del localStorage
    function cargarTareas() {
        // Obtiene el JSON guardado en localStorage
        const datos = localStorage.getItem("tareas");
        // Convierte el JSON a array, o crea un array vacío si no existen datos
        tareas = datos ? JSON.parse(datos) : [];
        mostrarTareas();
    }

    // Función para guardar las tareas en localStorage
    function guardarTareas() {
        // Convierte el array a JSON y lo guarda en localStorage
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    // Función para mostrar todas las tareas en la lista
    function mostrarTareas() {
        // Limpia la lista actual
        listaTareas.innerHTML = "";

        // Itera sobre cada tarea y crea un elemento de lista
        tareas.forEach((tarea, index) => {
            // Crea el elemento <li>
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";

            // Agrega el contenido HTML con la tarea y un botón de eliminar
            li.innerHTML = `
            <span>${tarea.texto}</span>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        `;

            // Asigna el evento de clic al botón de eliminar
            li.querySelector("button").addEventListener("click", () => {
                eliminarTarea(index);
            });

            // Agrega el elemento a la lista
            listaTareas.appendChild(li);
        });
    }

    // Evento del botón para agregar nueva tarea
    btnAgregar.addEventListener("click", () => {
        // Obtiene el valor del input y elimina espacios en blanco
        const texto = tareaInput.value.trim();
        // Si el input está vacío, no hace nada
        if (texto === "") return;

        // Agrega la nueva tarea al array
        tareas.push({ texto });
        // Guarda los cambios en localStorage
        guardarTareas();
        // Actualiza la visualización
        mostrarTareas();
        // Limpia el campo de entrada
        tareaInput.value = "";
    });

    // Función para eliminar una tarea del array
    function eliminarTarea(index) {
        // Elimina la tarea en la posición index
        tareas.splice(index, 1);
        // Guarda los cambios en localStorage
        guardarTareas();
        // Actualiza la visualización
        mostrarTareas();
    }

    // Carga las tareas guardadas al abrir la página
    cargarTareas();
});