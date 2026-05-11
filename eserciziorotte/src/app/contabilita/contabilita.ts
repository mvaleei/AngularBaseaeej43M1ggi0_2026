import { Component } from '@angular/core';

import { Struttura } from '../Interfacce/Ancor';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-contabilita',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './contabilita.html',
  styleUrl: './contabilita.css',
})
export class Contabilita {


  linkLetti: Array<Struttura> = [
    {
      dicitura: "Inserisci fattura",
      url: "/contab/inserisci"
    },
    {
      dicitura: "Saldo bancario",
      url: "/contab/saldo"
    },
    {
      dicitura: "Test",
      url: "/contab/test"
    }
  ]


}
