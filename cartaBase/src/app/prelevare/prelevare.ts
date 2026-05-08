import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prelevare',
  imports: [FormsModule],
  templateUrl: './prelevare.html',
  styleUrl: './prelevare.css',
})
export class Prelevare {

  @Input() saldoFiglio: number = 0;

  importo: number = 0;

  @Output() eventoInvia = new EventEmitter<number>();

  inviaSaldo(): void {
    if (this.saldoFiglio >= this.importo) {
      this.eventoInvia.emit(this.saldoFiglio - this.importo);
    }
    else {
      alert("Attenzione, fondi non disponibili");
    }
  }

}
