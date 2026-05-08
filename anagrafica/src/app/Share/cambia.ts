import { PipeTransform, Pipe } from '@angular/core'

@Pipe(
    {
        name: 'change'       //dentro l'html utilizzeremo questo valore   |change
    }
)
export class Trasformare implements PipeTransform {

    transform(
        value: any,     //rappresenta il valore a sinistra del carattere pipe   | upprcase
        carattere: string    //opzionale. strettamente legato al pipe custom non ho limite di valori da passare nella firma
    ) {
        return value.replace(carattere, "D");
    }


}