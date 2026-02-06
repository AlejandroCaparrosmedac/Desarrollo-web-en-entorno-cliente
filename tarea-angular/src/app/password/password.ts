import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {
  longitud: number = 12;
  incluirMayusculas: boolean = true;
  incluirMinusculas: boolean = true;
  incluirNumeros: boolean = true;
  incluirSimbolos: boolean = false;
  passwordGenerado: string = '';
  mensajeCopia: string = '';

  private readonly MAYUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz';
  private readonly NUMEROS = '0123456789';
  private readonly SIMBOLOS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  generarPassword(): void {
    if (!this.incluirMayusculas && !this.incluirMinusculas && !this.incluirNumeros && !this.incluirSimbolos) {
      this.passwordGenerado = '';
      this.mensajeCopia = '';
      return;
    }

    let caracteres = '';
    if (this.incluirMayusculas) caracteres += this.MAYUSCULAS;
    if (this.incluirMinusculas) caracteres += this.MINUSCULAS;
    if (this.incluirNumeros) caracteres += this.NUMEROS;
    if (this.incluirSimbolos) caracteres += this.SIMBOLOS;

    let password = '';
    for (let i = 0; i < this.longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      password += caracteres[randomIndex];
    }

    this.passwordGenerado = password;
    this.mensajeCopia = '';
  }

  copiarAlPortapapeles(): void {
    if (this.passwordGenerado) {
      navigator.clipboard.writeText(this.passwordGenerado).then(() => {
        this.mensajeCopia = '¡Contraseña copiada al portapapeles!';
        setTimeout(() => {
          this.mensajeCopia = '';
        }, 3000);
      }).catch(() => {
        this.mensajeCopia = 'Error al copiar la contraseña';
      });
    }
  }
}
