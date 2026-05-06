import { Component } from '@angular/core';

import { Figlio } from '../figlio/figlio';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  imports: [Figlio, FormsModule],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {

  cittaNascita: string = "Natale";

}
