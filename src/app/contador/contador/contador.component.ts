import { Component } from '@angular/core';

@Component({
  template: `<h1>{{ titulo }}</h1>
    <h3>La base es de {{ base }}</h3>
    <button (click)="incrementar(base)">+{{ base }}</button>
    <span> {{ contador }} </span>
    <button (click)="incrementar(-base)">-{{ base }}</button> `,
  selector: 'app-contador',
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  contador: number = 0;
  base: number = 5;
  incrementar(numero: number): void {
    this.contador += numero;
  }
}
