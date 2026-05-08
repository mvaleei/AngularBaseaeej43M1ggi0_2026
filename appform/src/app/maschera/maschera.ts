import { Component } from '@angular/core';



import {
  FormGroup,    //struttura dell'intero oggetto (record)
  FormControl   //classe del singolo campo
} from '@angular/forms'


@Component({
  selector: 'app-maschera',
  imports: [],
  templateUrl: './maschera.html',
  styleUrl: './maschera.css',
})
export class Maschera {

  //creo l'oggetto che mapperà tutti idati inseriti nell'html
  contactForm: FormGroup = new FormGroup(
    {
      nome: new FormControl(),
      cognome: new FormControl(),
      anni: new FormControl()
    }
  )

}
