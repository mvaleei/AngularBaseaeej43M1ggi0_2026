import { Component, OnInit } from '@angular/core';

import { Utente } from '../Interfacce/Utente';

import { UtentiService } from '../Services/utenti.service';

@Component({
  selector: 'app-consumo',
  imports: [],
  templateUrl: './consumo.html',
  styleUrl: './consumo.css',
  providers: [UtentiService]
})
export class Consumo implements OnInit {


  constructor(private _Utenti: UtentiService) { }


  ngOnInit(): void {

  }

  listaUtenti: Array<Utente> = [];





}
