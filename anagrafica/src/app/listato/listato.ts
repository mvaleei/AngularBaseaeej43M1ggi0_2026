import { Component } from '@angular/core';

import { Persona } from '../Interfacce/Persona';

import { Dettaglio } from '../dettaglio/dettaglio';

import { Inserisci } from '../inserisci/inserisci';

import { UpperCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common'

import { Trasformare } from '../Share/cambia'

import { contabilita } from '../Share/Ruolo';

import { Verifica } from '../Share/Verifica';

@Component({
  selector: 'app-listato',
  imports: [
    Dettaglio,
    Inserisci,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    Trasformare,
    contabilita,
    Verifica
  ],
  templateUrl: './listato.html',
  styleUrl: './listato.css',
})
export class Listato {

  peoples: Array<Persona> = [
    {
      id: 1,
      nominativo: "Mario Rossi",
      annoNascita: 2000,
      interno: true,
      stipendio: 2500
    },
    {
      id: 2,
      nominativo: "Carlo Bianchi",
      annoNascita: 1990,
      interno: false,
      stipendio: 1950
    },
    {
      id: 3,
      nominativo: "Stefano Gialli",
      annoNascita: 2000,
      interno: true,
      stipendio: 4000
    }
  ]

  ricezioneNuovo(nuovaPersona: Persona): void {
    nuovaPersona.id = this.peoples.length + 1
    this.peoples.push(nuovaPersona);
  }


}
