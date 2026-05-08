import { Component, Input } from '@angular/core';

import { Persona } from '../Interfacce/Persona';

@Component({
  selector: 'app-dettaglio',
  imports: [],
  templateUrl: './dettaglio.html',
  styleUrl: './dettaglio.css',
})
export class Dettaglio {

  visualizza: boolean = false;

  @Input() people: Persona = {
    id: 0,
    nominativo: "",
    annoNascita: 99,
    interno: true,
    stipendio:0
  }

  scegli(): void {
    this.visualizza = !this.visualizza;
  }

}
