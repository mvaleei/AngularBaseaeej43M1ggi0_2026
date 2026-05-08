import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-versare',
  imports: [FormsModule],
  templateUrl: './versare.html',
  styleUrl: './versare.css',
})
export class Versare {

  importo: number = 0;

  @Input() saldoFiglio: number = 0

  @Output() eventoFiglio = new EventEmitter<number>();

  inviaSaldo(): void {

    if ((this.saldoFiglio + this.importo) > 500) {
      alert("Attenzione superato il budget");
    }
    else {
      this.eventoFiglio.emit(this.saldoFiglio + this.importo)
    }

  }

}
