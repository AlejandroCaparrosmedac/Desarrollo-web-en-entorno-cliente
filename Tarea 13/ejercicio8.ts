function comprobadorNumero(valor: number): number {
    if (valor < 0) {
        throw new Error("El número no puede ser negativo");
    } else{
        return valor * 2;
    }
}

function ejercicio8(): void {
    const inputElement = document.getElementById("ejercicio8") as HTMLInputElement;
    const valor = Number(inputElement.value);
    try {
        console.log(comprobadorNumero(valor));
}
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error capturado: ${error.message}`);
        } else {
            console.error("Error desconocido");
        }
    }
}