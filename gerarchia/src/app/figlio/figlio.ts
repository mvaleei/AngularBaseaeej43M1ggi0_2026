import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-figlio',
  imports: [FormsModule],
  templateUrl: './figlio.html',
  styleUrl: './figlio.css',
})
export class Figlio {

  @Input() cittaRicevuta: string = "Componente figlio";

  @Input() anniRicevuti: number = 0;

  nomeInserito: string = "Default";


  //evento che una volta scatenato invierà un'informazione al padre
  @Output() eventoFiglio = new EventEmitter<string>();

  inviaAlPadre(): void {
    //scateno l'evento per inviare EFFETTIVAMENTE l'informazione al padre
    this.eventoFiglio.emit(this.nomeInserito);
  }


  anniDigitati: number = 0;
  @Output() eventoAnni = new EventEmitter<number>();

  inviaAnniAlpadre(): void {
    this.eventoAnni.emit(this.anniDigitati);
  }


  inviaTuttoAlPadre(): void {
    this.eventoFiglio.emit(this.nomeInserito);
    this.eventoAnni.emit(this.anniDigitati);
  }

}
