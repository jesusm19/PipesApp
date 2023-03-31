import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Jesus';
  numero: number = 1000;

  mostrarOriginales(){
    console.log(this.nombre);
    console.log(this.numero);
  }

}
