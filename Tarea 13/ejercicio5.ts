interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

const productos: Producto[] = [
    { id: 1, nombre: "Ratón inalámbrico", precio: 19.99 },
    { id: 2, nombre: "Teclado mecánico", precio: 49.99 },
    { id: 3, nombre: "Monitor 24 pulgadas", precio: 149.99 }
];
function ejercicio5(): void {
    let precioTotal: number = 0;
    productos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
        precioTotal += producto.precio;
    });
    console.log(`Precio total de todos los productos: $${precioTotal.toFixed(2)}`);
    document.getElementById("ej5Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
        `<p>Precio total de todos los productos: $${precioTotal.toFixed(2)}</p>` +
        `</div>`;
};