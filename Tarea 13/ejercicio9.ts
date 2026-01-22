function toUpperSeguro(texto: unknown): string {
    if (typeof texto === 'string' && texto !== '') {
        if(!isNaN(Number(texto))) {
            throw new Error('El valor proporcionado es un número.');
        }
        return texto.toUpperCase();
    } else {
        throw new Error('El valor proporcionado no es una cadena de texto o está vacío.');
    }
}

function ejercicio9(): void {
    const inputElement = document.getElementById("ejercicio9") as HTMLInputElement;
    const valor: unknown = inputElement.value;
    try {
        console.log(toUpperSeguro(valor)); // Si en vez de 'valor' ponemos un número, se lanza el error
        document.getElementById("ej9Info")!.innerHTML = `<div class="alert alert-info" role="alert">` +
            `<p>El texto en mayúsculas es: ${toUpperSeguro(valor)}</p>` +
            `</div>`;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error capturado: ${error.message}`);
            document.getElementById("ej9Info")!.innerHTML = `<div class="alert alert-danger" role="alert">` +
                `<p>Error capturado: ${error.message}</p>` +
                `</div>`;
        } else {
            console.error("Error desconocido");
            document.getElementById("ej9Info")!.innerHTML = `<div class="alert alert-danger" role="alert">` +
                `<p>Error desconocido</p>` +
                `</div>`;
        }
    }
}