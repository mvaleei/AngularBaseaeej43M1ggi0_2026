import { Component } from '@angular/core';


import { Gestione } from './gestione/gestione';

@Component({
  selector: 'app-root',
  imports: [Gestione],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
