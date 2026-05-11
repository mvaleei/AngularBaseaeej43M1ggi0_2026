import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

import { Struttura } from '../Interfacce/Ancor';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  linkLetti: Array<Struttura> = [
    { url: "/home", dicitura: "Home" },
    { url: "/contab", dicitura: "Contabilità" },

  ]

}
