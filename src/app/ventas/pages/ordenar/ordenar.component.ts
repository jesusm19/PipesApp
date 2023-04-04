import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  isMayuscula: boolean = true;
  heroes: Heroe [] = [
    {nombre: 'superman', vuela: true, color: Color.azul},
    {nombre: 'batman', vuela: false, color: Color.negro},
    {nombre: 'ironman', vuela: true, color: Color.rojo},
    {nombre: 'hulk', vuela: false, color: Color.verde}
  ];

  ordenarPor: string = '';

  convertirMayusculaMinuscula(){
    if(this.isMayuscula){
      this.isMayuscula = false;
      return;
    }
    this.isMayuscula = true;
  }

  ordenarPorTipo(tipoOrden: string){
    this.ordenarPor = tipoOrden;

  }

}
