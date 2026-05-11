import { Component, OnInit } from '@angular/core';

import { Utente } from '../Interfacce/Utente';

import { UtentiService } from '../Services/utenti.service';
import { map } from 'rxjs';

import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-consumo',
  imports: [CommonModule],
  templateUrl: './consumo.html',
  styleUrl: './consumo.css',
  providers: [UtentiService],
  standalone: true
})
export class Consumo implements OnInit {

  constructor(private _Utenti: UtentiService) { }

  listaUtenti: Utente[] = [];


  carica(): void {
    this._Utenti.getUtenti().subscribe(
      (dato) => {
        this.listaUtenti = dato
      }
    );
  }

  ngOnInit() {

    this._Utenti.getUtenti().pipe
      (
        map(
          (ut: Array<Utente>) => {
            return ut.filter(ut => ut.id > 5)
          }
        )
      ).subscribe(
        (utenteFiltrato: Array<Utente>) => {
          this.listaUtenti = utenteFiltrato
          console.log(utenteFiltrato);
        }
      )


  }
}
