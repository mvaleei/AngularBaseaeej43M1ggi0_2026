import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { Padre } from './padre/padre';

@Component({
  selector: 'app-root',
  imports: [Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
