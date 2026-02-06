import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  imports: [FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  tareas: string[] = ['Primera tarea', 'Segunda tarea', 'Tercera tarea'];

  nuevaTarea: string = '';

  agregarTarea() {
    if (this.nuevaTarea.trim().length > 0)
      this.tareas.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';
}
}
