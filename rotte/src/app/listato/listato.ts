import { Component } from '@angular/core';

@Component({
  selector: 'app-listato',
  imports: [],
  templateUrl: './listato.html',
  styleUrl: './listato.css',
})
export class Listato {

  listaFattura: Array<string> = [
    "Pippo srl - Portatile - 1500",
    "Minni snc - Stampante - 465",
    "Topolino spa - Monitor 42'' - 1450"
  ]

}
