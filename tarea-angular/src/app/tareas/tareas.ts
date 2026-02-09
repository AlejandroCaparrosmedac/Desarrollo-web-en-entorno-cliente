import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnInit {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  private STORAGE_KEY = 'tareas-tarea-15';

  ngOnInit(): void {
    this.cargarTareas();
  }

  agregarTarea(): void {
    if (this.nuevaTarea.trim().length > 0) {
      const nuevaTarea: Tarea = {
        id: Date.now(),
        texto: this.nuevaTarea.trim(),
        completada: false
      };
      this.tareas.push(nuevaTarea);
      this.nuevaTarea = '';
      this.guardarTareas();
    }
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    this.guardarTareas();
  }

  toggleCompletada(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardarTareas();
    }
  }

  get totalTareas(): number {
    return this.tareas.length;
  }

  get tareasCompletadas(): number {
    return this.tareas.filter(t => t.completada).length;
  }

  get tareasPendientes(): number {
    return this.tareas.filter(t => !t.completada).length;
  }

  private guardarTareas(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tareas));
  }

  private cargarTareas(): void {
    const tareasGuardadas = localStorage.getItem(this.STORAGE_KEY);
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }
}
