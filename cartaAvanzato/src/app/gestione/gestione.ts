import { Component } from '@angular/core';

import { Operazione } from '../operazione/operazione';

import { Operation } from '../Interfaccia/Operation';

@Component({
  selector: 'app-gestione',
  imports: [Operazione],
  templateUrl: './gestione.html',
  styleUrl: './gestione.css',
})
export class Gestione {

  saldo: number = 300;

  lista: Array<Operation> = [
    {
      tipo: 0,
      //saldo: this.saldo
    },
    {
      tipo: 1,
      //saldo: this.saldo
    },
  ]


  riceviSaldo(nuovoSaldo: number): void {
    this.saldo = nuovoSaldo;
  }

}
