import { Component, EventEmitter, Output } from '@angular/core';

import { Persona } from '../Interfacce/Persona';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inserisci',
  imports: [FormsModule],
  templateUrl: './inserisci.html',
  styleUrl: './inserisci.css',
})
export class Inserisci {


  /*
  nuovaPersona: Persona = {    persona nuovapersona = new persona();
    id: 0,
    nominativo: "",
    interno: false,
    annoNascita: 0
  }
    */

  nominativo: string = ""
  interno: string = "s";
  annoNascita: number = 0

  @Output() eventoInvio = new EventEmitter<Persona>();


  inviaNuovo(): void {
    let nuovapersona: Persona = {
      id: 0,
      nominativo: this.nominativo,
      annoNascita: this.annoNascita,
      interno: this.interno === "s" ? true : false,
      stipendio: 2800
    }

    //nuovapersona.nominativo="Carlo"

    //console.log(nuovapersona);

    this.eventoInvio.emit(nuovapersona);

  }

}
