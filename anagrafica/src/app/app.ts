import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Listato } from './listato/listato'

@Component({
  selector: 'app-root',
  imports: [Listato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
