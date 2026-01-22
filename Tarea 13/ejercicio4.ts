// Ejercicio 4: Interfaces en TypeScript
// Demuestra cómo definir una interfaz y usarla para tipar un objeto

// Definición de la interfaz Producto con propiedades tipadas
interface Producto {
    id: number;          // Identificador del producto
    nombre: string;      // Nombre del producto
    precio: number;      // Precio del producto
}

// Creación de un objeto que implementa la interfaz Producto
let productoCorrecto: Producto = {
    id: 1,
    nombre: "Ratón inalámbrico",
    precio: 19.99
};

// Ejemplo de uso incorrecto comentado (genera error de tipo)
// let productoIncorrecto: Producto = {
//     id: "uno",              // ERROR: debe ser number
//     nombre: "Teclado",
//     precio: "barato"        // ERROR: debe ser number
// };

// Función principal del ejercicio
function ejercicio4(): void {
    console.clear();
    // Convertir el objeto a JSON y mostrarlo en consola
    console.log(`Producto correcto: ${JSON.stringify(productoCorrecto)}`);
    // Mostrar el producto en el DOM
    document.getElementById("ej4Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
        `<p>Producto correcto: ${JSON.stringify(productoCorrecto)}</p>` +
        `</div>`;
}

