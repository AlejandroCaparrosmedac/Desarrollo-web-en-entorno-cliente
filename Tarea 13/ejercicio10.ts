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
    public mostrarAlumno(): void {
        console.log(
            `ID: ${this.id}, Nombre: ${this.nombre}, Notas: ${this.notas.join(", ")}, Media: ${this.calcularMedia().toFixed(2)}`
        );
    }
}

function ejercicio10(): void {
    const alumno: AlumnoApp[] = [
        new AlumnoApp(1, "Ana Gómez", [8, 9, 7, 9]),
        new AlumnoApp(2, "Luis Pérez", [8, 6, 5, 9]),
        new AlumnoApp(3, "Marta Rodríguez", [0, 9, 8, 7])
    ];
    alumno.forEach(a => {
        a.calcularMedia();
        a.mostrarAlumno();
    });

    const mediaGlobal =alumno.reduce((acc, a) => acc + a.media, 0) / alumno.length;
    console.log(`Media global de todos los alumnos: ${mediaGlobal.toFixed(2)}`);

}