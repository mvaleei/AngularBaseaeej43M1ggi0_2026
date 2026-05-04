import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  //template: "<div>Saluti da Roma</div>",
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('avvio');
  title: string = "Primo progetto in angular";
  corso: string = "Angular Base";
  anni: number = 15;


  cittaNascita: string = "Livorno";


  metodo1(): void {
    alert(`Sto provando il binding di tipo: event binding: ${this.anni}`)
    //alert("Sto provando il binding di tipo: event binding " + this.anni);
  }

}
