import { Component } from '@angular/core';

import { Prelevare } from '../prelevare/prelevare'

import { Versare } from '../versare/versare';

@Component({
  selector: 'app-gestione',
  imports: [Prelevare, Versare],
  templateUrl: './gestione.html',
  styleUrl: './gestione.css',
})
export class Gestione {

  saldo: number = 300;


  riceviSaldo(nuovoSaldo: number): void {
    this.saldo = nuovoSaldo;
  }

}
