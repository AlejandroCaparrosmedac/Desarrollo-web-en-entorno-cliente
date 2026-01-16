function calcularMedia(a: number, b: number): number {
    return (a + b) / 2;
}

function mostrarMedia(): void {
    const a : number = Number((document.getElementById("valor1") as HTMLInputElement).value);
    const b : number = Number((document.getElementById("valor2") as HTMLInputElement).value);
    const resultado: number = calcularMedia(a, b);
    document.getElementById("ej2Info")?.innerHTML="La media es: " + resultado;
}
