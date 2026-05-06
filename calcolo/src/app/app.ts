import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  Base: number = 0;
  Altezza: number = 0
  figura: string = ""

  divisore: number = 1;

  area: number = 0

  figuraDivisore: string = "";


  animali: Array<string> = ["Cane", "Gatto", "Topo"];


  calcolare(): void {

    this.divisore = parseInt(this.figuraDivisore.split(':')[0]);

    this.area = this.Base * this.Altezza / this.divisore;


    /*
    this.area = this.Altezza * this.Base

    if (this.figura === "Triangolo") {
      this.area /= 2
    }
      */

    /*
    if (this.figura === "Rettangolo") {
      this.area = this.Altezza * this.Base;
    }
    else {
      this.area = this.Altezza * this.Base / 2
    }
      */


    //alert("Sto per efettuare il calcolo");
  }


}
