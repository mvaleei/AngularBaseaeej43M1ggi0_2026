import { Component } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  FormGroup,    //struttura dell'intero oggetto (record)
  FormControl,   //classe del singolo campo
  Validators    //per gestire e applicare le reogle di convalida
} from '@angular/forms'


@Component({
  selector: 'app-maschera',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './maschera.html',
  styleUrl: './maschera.css',
})
export class Maschera {

  //creo l'oggetto che mapperà tutti idati inseriti nell'html
  contactForm: FormGroup = new FormGroup(
    {
      nome: new FormControl("Mario", [Validators.required]),
      cognome: new FormControl("Rossi", [Validators.required, Validators.minLength(4)]),
      anni: new FormControl(18, [Validators.min(18)])
    }
  )


  registra(): void {
    console.log(this.contactForm.value);
  }

}
