import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  imports: [],
  templateUrl: './figlio.html',
  styleUrl: './figlio.css',
})
export class Figlio {

  @Input() cittaRicevuta: string = "Componente figlio";

  @Input() anniRicevuti: number = 0;

}
