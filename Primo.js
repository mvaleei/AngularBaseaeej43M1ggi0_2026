var nome = "Giorgio";
console.log(nome);
var anni = 29;
var maggiorenne = true;
//anni="Ciao"
var anniNuovi = "29";
/*
if (anni == parseInt( anniNuovi)){

}
*/
var persona = {
    nome: "Carmelo",
    citta: "Milano"
};
console.log(typeof (persona));
persona = "Fabio";
persona = 45;
persona = false;
var Mario = {
    nome: "Mario Rossi",
    citta: "Milano",
    anni: 41,
    interno: true,
    sportPraticati: [
        { descrizione: "Nuoto", anniPraticato: 5 },
        { descrizione: "Tennis", anniPraticato: 7 }
    ]
};
var Giorgio = {
    nome: "Giorgio Verdi",
    citta: "Palermo",
    anni: 26,
    interno: false,
    sportPraticati: [
        { descrizione: "rugby", anniPraticato: 10 }
    ]
};
var Paolo = {
    nome: "Paolo Gialli",
    citta: "Firenze",
    anni: 37,
    interno: false
};
var anagrafica = [
    Mario, Giorgio, Paolo
];
console.log(anagrafica);
var interni = anagrafica.filter(
/*
(personaLetta: people) => {
    console.log(personaLetta);
    return personaLetta.interno == true  //&& ||
}
    */
function (personaLetta) { return personaLetta.interno == true; });
console.log(interni);
