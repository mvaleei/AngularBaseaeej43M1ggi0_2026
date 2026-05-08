import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Gestione } from './gestione/gestione';

@Component({
  selector: 'app-root',
  imports: [Gestione],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cartaAvanzato');
}
