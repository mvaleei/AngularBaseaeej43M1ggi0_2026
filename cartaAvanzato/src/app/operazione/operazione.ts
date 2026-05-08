import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operazione',
  imports: [FormsModule],
  templateUrl: './operazione.html',
  styleUrl: './operazione.css',
})
export class Operazione {

  @Input() saldoFiglio: number = 0;

  importo: number = 0;

  @Input() tipo: number = 0;   // 0=prelevare   |  1=versare

  @Output() eventoInvia = new EventEmitter<number>();

  inviaSaldo(): void {
    console.log(this.tipo)
    console.log(this.saldoFiglio)

    if (this.tipo === 0) {
      if (this.saldoFiglio >= this.importo) {
        this.eventoInvia.emit(this.saldoFiglio - this.importo);
      }
      else {
        alert("Attenzione, fondi non disponibili");
      }
    }
    else {
      if ((this.saldoFiglio + this.importo) > 500) {
        alert("Attenzione superato il budget");
      }
      else {
        this.eventoInvia.emit(this.saldoFiglio + this.importo)
      }
    }
  }

}
