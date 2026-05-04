
var nome: string = "Giorgio";

console.log(nome);


var anni: number = 29;

var maggiorenne: boolean = true;

//anni="Ciao"

var anniNuovi: string = "29"


/*
if (anni == parseInt( anniNuovi)){

}
*/


var persona: any = {
    nome: "Carmelo",
    citta: "Milano"
}

console.log(typeof (persona));


persona = "Fabio"

persona = 45
persona = false;

interface sports {
    descrizione: string,
    anniPraticato: number
}

interface people {
    nome: string,
    citta: string,
    anni: number,
    interno: boolean,
    sportPraticati?: Array<sports>
}


var Mario: people = {
    nome: "Mario Rossi",
    citta: "Milano",
    anni: 41,
    interno: true,
    sportPraticati: [
        { descrizione: "Nuoto", anniPraticato: 5 },
        { descrizione: "Tennis", anniPraticato: 7 }
    ]
}

var Giorgio: people = {
    nome: "Giorgio Verdi",
    citta: "Palermo",
    anni: 26,
    interno: false,
    sportPraticati: [
        { descrizione: "rugby", anniPraticato: 10 }
    ]
}

var Paolo: people = {
    nome: "Paolo Gialli",
    citta: "Firenze",
    anni: 37,
    interno: false
}


var anagrafica: Array<people> = [
    Mario, Giorgio, Paolo
]

console.log(anagrafica);

var interni = anagrafica.filter(
    /*
    (personaLetta: people) => {
        console.log(personaLetta);
        return personaLetta.interno == true  //&& ||
    }
        */
    (personaLetta: people) => personaLetta.interno == true
)

console.log(interni);

var datimappati = anagrafica.map(
    (personaletta: people) => {
        return {
            cittaNascita: personaletta.citta,
            tipoPersona: personaletta.anni > 17 ? "Maggiorenne" : "Minorenne"
        }
    }
)

console.log(datimappati);

console.log("Inizio gestione O.O.P.");



class appartamento {
    public mq: number = 0
    citta: string = "";
    indirizzo: string = "";


    constructor(
        _mq: number, citta: string, indirizzo: string
    ) {
        this.mq = _mq;
        this.citta = citta;
        this.indirizzo = indirizzo;
    }

    dettagli(): string {
        return this.citta + "-" + this.indirizzo + "-" + this.mq
    }

    prova(): void {
        alert("Ciao");
    }

}

var magliana = new appartamento(110, "Roma", "Via della Magliana, 65");

/*
magliana.citta = "Roma"
magliana.indirizzo = "Via della magliana, 65"
magliana.mq = 110;
*/

console.log(magliana.citta);

console.log(magliana.dettagli());


class villa extends appartamento {
    private tipologiaTrattativa: string = "Pubblica";

    constructor(_mq: number, citta: string, indirizzo: string, tipologia: string) {
        super(_mq, citta, indirizzo)
        this.tipologiaTrattativa = tipologia
    }



    getTipologia(): string {
        return this.tipologiaTrattativa;
    }

    setTipologia(tipo: string): void {
        this.tipologiaTrattativa = tipo
    }

    dettagli(): string {
        return super.dettagli() + "-" + this.tipologiaTrattativa
    }

}


var eur = new villa(150, "Roma", "Viale Africa", "Privata");


console.log(eur.dettagli())