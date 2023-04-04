import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //I18nSelect
  nombre: string = 'Jesus';
  genero: string = 'masculino'

  invitacionMap = {
    'femenino': 'invitarla',
    'masculino': 'invitarlo'
  }

  //I18nPlural
  clientes: string[] = ['Maria', 'Nadia', 'Pedro', 'Jesús', 'Alberto'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
    
  };

  cambiarPersona(){
    if(this.genero === 'femenino'){
      this.nombre = 'Jesús';
      this.genero = 'masculino'
      return;
    }

    this.nombre = 'Nadia';
    this.genero = 'femenino';
  }

  borrarcliente(): void {
    if(this.clientes.length <= 0){
      return;
    }

    this.clientes.pop()

  }

  //KeyValu pipe
  persona = {
    nombre: 'Jesús',
    edad: 33,
    direccion: 'Sombrerete'
  }

  //Async pipe
  miObservable = interval(5000);
  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Fin de la promesa');

    }, 3500);
  });

}
