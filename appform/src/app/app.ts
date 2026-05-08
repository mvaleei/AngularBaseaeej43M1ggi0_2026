import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Maschera } from './maschera/maschera';

@Component({
  selector: 'app-root',
  imports: [Maschera],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appform');
}
