function mostrarDatos():void {
    let nombre: string = "Pepe";
    let edad: number = 30;
    let matriculado: boolean = true;
    let listaNotas: number[] = [7,6,5,2];
    const centro: string = "Madec";

    console.log('Nombre alumno: ' + nombre);
    console.log('Edad: '+ edad);
    console.log('Matriculado: '+ matriculado);
    console.log('Lista de notas: '+ listaNotas);
    console.log('Centro: '+ centro);

    document.getElementById("ej1Info")!.innerHTML = '<div class="alert alert-info" role="alert">' +
        `<p>Nombre alumno: ${nombre}</p>` +
        `<p>Edad: ${edad}</p>` +
        `<p>Matriculado: ${matriculado}</p>` +
        `<p>Lista de notas: ${listaNotas}</p>` +
        `<p>Centro: ${centro}</p>` +
        '</div>';
}