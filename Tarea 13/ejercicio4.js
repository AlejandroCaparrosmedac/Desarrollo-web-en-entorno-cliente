var productoCorrecto = {
    id: 1,
    nombre: "Ratón inalámbrico",
    precio: 19.99
};
// Ejemplo incorrecto (comentar después de comprobar el error)
var productoIncorrecto = {
    id: "uno",
    nombre: "Teclado",
    precio: "barato"
};
function ejercicio4() {
    (document.getElementById("ej4Info")).innerHTML = "Nombre del producto" + productoCorrecto.nombre;
}
