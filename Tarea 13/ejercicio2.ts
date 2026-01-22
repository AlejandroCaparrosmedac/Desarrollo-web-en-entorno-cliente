function calcularMedia(a: number, b: number): number {
    return (a + b) / 2;
}

function mostrarMedia(): void {
    console.clear();
    const a : number = Number((document.getElementById("valor1") as HTMLInputElement).value);
    const b : number = Number((document.getElementById("valor2") as HTMLInputElement).value);
    const resultado: number = calcularMedia(a, b);//Si al llamar a la función, omitimos alguno de los dos valores, TypeScript nos avisará de que faltan argumentos
    document.getElementById("ej2Info")!.innerHTML = '<div class="alert alert-info" role="alert">' +
        `<p>La media de ${a} y ${b} es ${resultado}</p>` +
        '</div>';
}
