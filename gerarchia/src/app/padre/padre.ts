import { Component } from '@angular/core';

import { Figlio } from '../figlio/figlio';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  imports: [Figlio, FormsModule],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {

  cittaNascita: string = "Natale";

  nomeRicevuto: string = "Nome del padre di default";

  riceviDalFiglio(nomeDelFiglio: string): void {
    this.nomeRicevuto = nomeDelFiglio;
  }

  anniRicevuti: number = 0

  riceviAnni(anniricevutiDalFiglio: number): void {
    this.anniRicevuti = anniricevutiDalFiglio;
  }

}
