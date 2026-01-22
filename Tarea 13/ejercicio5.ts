// Ejercicio 5: Arrays de objetos con interfaz y métodos de iteración
// Demuestra cómo trabajar con arrays tipados y usar forEach para iterar

// Definición de la interfaz Producto
interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

// Array de productos tipados con la interfaz Producto
const productos: Producto[] = [
    { id: 1, nombre: "Ratón inalámbrico", precio: 19.99 },
    { id: 2, nombre: "Teclado mecánico", precio: 49.99 },
    { id: 3, nombre: "Monitor 24 pulgadas", precio: 149.99 }
];

// Función principal del ejercicio
function ejercicio5(): void {
    console.clear();
    // Variable para almacenar el precio total
    let precioTotal: number = 0;
    // Iterar sobre cada producto en el array
    productos.forEach(producto => {
        // Mostrar información de cada producto en consola
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
        // Sumar el precio al total
        precioTotal += producto.precio;
    });
    // Mostrar el precio total con 2 decimales
    console.log(`Precio total de todos los productos: $${precioTotal.toFixed(2)}`);
    // Mostrar el resultado en el DOM
    document.getElementById("ej5Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
        `<p>Precio total de todos los productos: $${precioTotal.toFixed(2)}</p>` +
        `</div>`;
};