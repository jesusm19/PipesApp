import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  
  nombreLower: string = 'jesus';
  nombreUpper: string = 'JESUS';
  nombreTitle: string = 'jeSuS marTin';

  fecha: Date = new Date();

}
