import { Component, OnInit, signal } from '@angular/core';

import { Utente } from '../Interfacce/Utente';

import { UtentiService } from '../Services/utenti.service';

import { CommonModule } from '@angular/common'

import { map, Observable, takeWhile } from 'rxjs';

@Component({
  selector: 'app-consumo',
  imports: [CommonModule],
  templateUrl: './consumo.html',
  styleUrl: './consumo.css',
  providers: [UtentiService],
  standalone: true
})
export class Consumo {
  listaUtenti = signal<Utente[]>([]);

  constructor(private _Utenti: UtentiService) { }



  carica() {

    console.log(this._Utenti.getUtenti())
    this._Utenti.getUtenti().subscribe(
      {
        next: (dato) => this.listaUtenti.set(dato),
        error: (errore) => console.log(errore)
      }

    )

  }

}
