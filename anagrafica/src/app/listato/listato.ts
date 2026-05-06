import { Component } from '@angular/core';

import { Persona } from '../Interfacce/Persona';

import { Dettaglio } from '../dettaglio/dettaglio';

import { Inserisci } from '../inserisci/inserisci';

@Component({
  selector: 'app-listato',
  imports: [Dettaglio, Inserisci],
  templateUrl: './listato.html',
  styleUrl: './listato.css',
})
export class Listato {

  peoples: Array<Persona> = [
    {
      id: 1,
      nominativo: "Mario Rossi",
      annoNascita: 2000,
      interno: true
    },
    {
      id: 2,
      nominativo: "Carlo Bianchi",
      annoNascita: 1990,
      interno: false
    },
    {
      id: 3,
      nominativo: "Stefano Gialli",
      annoNascita: 1980,
      interno: true
    }
  ]


}
