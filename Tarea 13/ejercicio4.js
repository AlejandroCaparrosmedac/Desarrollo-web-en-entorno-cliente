var productoCorrecto = {
    id: 1,
    nombre: "Ratón inalámbrico",
    precio: 19.99
};
// Da error ya que el id introducido es string y esta inicializado como number, al igual que el precio
// let productoIncorrecto: Producto = {
//     id: "uno",
//     nombre: "Teclado",
//     precio: "barato"
// };
function ejercicio4() {
    document.getElementById("ej4Info").innerHTML = "<div class=\"alert alert-info\" role=\"alert\">" +
        "<p>Producto correcto: ".concat(JSON.stringify(productoCorrecto), "</p>") +
        "</div>";
}
