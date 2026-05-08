import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    {
        name: "ruoloAziendale"
    }
)
export class contabilita implements PipeTransform {
    transform(stipendio: number): string {
        let tipo: string = "";
        if (stipendio < 2000) {
            return "Operaio";
        }
        else if (stipendio >= 2000 && stipendio <= 2600) {
            return "Impiegato";
        }
        else {
            return "Dirigente";
        }
    }
}