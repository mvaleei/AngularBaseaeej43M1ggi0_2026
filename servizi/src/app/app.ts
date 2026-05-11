import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {Consumo} from './consumo/consumo'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Consumo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('servizi');
}
