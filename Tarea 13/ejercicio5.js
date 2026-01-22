var productos = [
    { id: 1, nombre: "Ratón inalámbrico", precio: 19.99 },
    { id: 2, nombre: "Teclado mecánico", precio: 49.99 },
    { id: 3, nombre: "Monitor 24 pulgadas", precio: 149.99 }
];
function ejercicio5() {
    var precioTotal = 0;
    productos.forEach(function (producto) {
        console.log("ID: ".concat(producto.id, ", Nombre: ").concat(producto.nombre, ", Precio: $").concat(producto.precio));
        precioTotal += producto.precio;
    });
    console.log("Precio total de todos los productos: $".concat(precioTotal.toFixed(2)));
    document.getElementById("ej5Info").innerHTML = "<div class=\"alert alert-info\" role=\"alert\">" +
        "<p>Precio total de todos los productos: $".concat(precioTotal.toFixed(2), "</p>") +
        "</div>";
}
;
