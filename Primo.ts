
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