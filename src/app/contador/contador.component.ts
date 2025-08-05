import { Component } from '@angular/core';
import { Persona } from '../persona';
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})

/* Manejo de metodos dentro de typeScript*/
export class ContadorComponent {


  numero: number = 1;
  
  decrementar(){
    this.numero--;
  }

  incrementar(){
    this.numero+=1;
  }
}
