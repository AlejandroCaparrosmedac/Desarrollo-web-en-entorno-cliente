interface Alumno {
    id: number;
    nombre: string;
    notas: number[];
}

class AlumnoApp implements Alumno {
    id: number;
    nombre: string;
    notas: number[];
    media: number;

    constructor(id: number, nombre: string, notas: number[]) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
        this.media = 0;
    }

    public calcularMedia(): number {
        const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
        this.media = suma / this.notas.length;
        return this.media;
    }
    public mostrarAlumno(): string {
        console.log(
            `Nombre: ${this.nombre}, Notas: ${this.notas.join(", ")}, Media: ${this.calcularMedia().toFixed(2)}`
        );
        return `Nombre: ${this.nombre}, Notas: ${this.notas.join(", ")}, Media: ${this.calcularMedia().toFixed(2)}`;
    }
}

function ejercicio10(): void {
    console.clear();
    const alumno: AlumnoApp[] = [
        new AlumnoApp(1, "Ana Gómez", [8, 9, 7, 9]),
        new AlumnoApp(2, "Luis Pérez", [8, 6, 5, 9]),
        new AlumnoApp(3, "Marta Rodríguez", [0, 9, 8, 7])
    ];
    const resultadosDiv = document.getElementById("ej10Info") as HTMLElement;
    resultadosDiv.classList.add("alert", "alert-info");
    resultadosDiv.innerHTML = '';

    alumno.forEach(a => {
        resultadosDiv.innerHTML += a.mostrarAlumno() + '<br>';
        a.calcularMedia();
        a.mostrarAlumno();
    });

    const mediaGlobal =alumno.reduce((acc, a) => acc + a.media, 0) / alumno.length;
    resultadosDiv.innerHTML += `<br>Media global de todos los alumnos: ${mediaGlobal.toFixed(2)}`;
    console.log(`Media global de todos los alumnos: ${mediaGlobal.toFixed(2)}`);

}