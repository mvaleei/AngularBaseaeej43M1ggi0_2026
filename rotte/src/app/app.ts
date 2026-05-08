import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

/*
import { Clienti } from './clienti/clienti';
import { Fornitori } from './fornitori/fornitori';
import { Fatture } from './fatture/fatture';
import { Magazzino } from './magazzino/magazzino';
*/

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLinkWithHref
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rotte');
}
