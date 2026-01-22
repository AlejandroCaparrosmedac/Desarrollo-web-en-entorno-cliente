// Ejercicio 10: Clases, arrays de objetos y métodos reduce
// Demuestra cómo trabajar con clases, calcular promedios y usar reduce para agregación

// Definición de la interfaz Alumno
interface Alumno {
    id: number;
    nombre: string;
    notas: number[];
}

// Clase que implementa la interfaz Alumno
class AlumnoApp implements Alumno {
    // Propiedades del alumno
    id: number;
    nombre: string;
    notas: number[];
    media: number;  // Almacena la media calculada

    // Constructor que inicializa los datos del alumno
    constructor(id: number, nombre: string, notas: number[]) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
        this.media = 0;
    }

    // Método que calcula la media usando reduce
    public calcularMedia(): number {
        // reduce suma todas las notas y divide por la cantidad
        const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
        this.media = suma / this.notas.length;
        return this.media;
    }

    // Método que devuelve una representación en string del alumno
    public mostrarAlumno(): string {
        // Mostrar en consola
        console.log(
            `Nombre: ${this.nombre}, Notas: ${this.notas.join(", ")}, Media: ${this.calcularMedia().toFixed(2)}`
        );
        // Devolver la información formateada
        return `Nombre: ${this.nombre}, Notas: ${this.notas.join(", ")}, Media: ${this.calcularMedia().toFixed(2)}`;
    }
}

// Función principal del ejercicio
function ejercicio10(): void {
    console.clear();
    // Array de alumnos
    const alumno: AlumnoApp[] = [
        new AlumnoApp(1, "Ana Gómez", [8, 9, 7, 9]),
        new AlumnoApp(2, "Luis Pérez", [8, 6, 5, 9]),
        new AlumnoApp(3, "Marta Rodríguez", [0, 9, 8, 7])
    ];
    // Obtener el elemento donde mostrar los resultados
    const resultadosDiv = document.getElementById("ej10Info") as HTMLElement;
    // Agregar clases Bootstrap para el estilo
    resultadosDiv.classList.add("alert", "alert-info");
    resultadosDiv.innerHTML = '';

    // Iterar sobre cada alumno y mostrar su información
    alumno.forEach(a => {
        resultadosDiv.innerHTML += a.mostrarAlumno() + '<br>';
        a.calcularMedia();
        a.mostrarAlumno();
    });

    // Calcular la media global de todos los alumnos usando reduce
    const mediaGlobal = alumno.reduce((acc, a) => acc + a.media, 0) / alumno.length;
    // Mostrar la media global en el DOM
    resultadosDiv.innerHTML += `<br>Media global de todos los alumnos: ${mediaGlobal.toFixed(2)}`;
    // Mostrar la media global en consola
    console.log(`Media global de todos los alumnos: ${mediaGlobal.toFixed(2)}`);

}