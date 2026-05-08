import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    {
        name: "verifica"
    }
)
export class Verifica implements PipeTransform {
    transform(
        stipendio: number,
        annoNascita: number,
        interno: boolean
    ) {

        let controllo: string = ""

        let anni = 2026 - annoNascita;

        if (anni < 40 && stipendio > 2500 && interno) {
            controllo = "Hai fatto carriera"
        }
        else {
            controllo = "Sei in fase di crescita";
        }

        return controllo;

    }
}