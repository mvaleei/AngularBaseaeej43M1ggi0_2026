var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var datimappati = anagrafica.map(function (personaletta) {
    return {
        cittaNascita: personaletta.citta,
        tipoPersona: personaletta.anni > 17 ? "Maggiorenne" : "Minorenne"
    };
});
console.log(datimappati);
console.log("Inizio gestione O.O.P.");
var appartamento = /** @class */ (function () {
    function appartamento(_mq, citta, indirizzo) {
        this.mq = 0;
        this.citta = "";
        this.indirizzo = "";
        this.mq = _mq;
        this.citta = citta;
        this.indirizzo = indirizzo;
    }
    appartamento.prototype.dettagli = function () {
        return this.citta + "-" + this.indirizzo + "-" + this.mq;
    };
    appartamento.prototype.prova = function () {
        alert("Ciao");
    };
    return appartamento;
}());
var magliana = new appartamento(110, "Roma", "Via della Magliana, 65");
/*
magliana.citta = "Roma"
magliana.indirizzo = "Via della magliana, 65"
magliana.mq = 110;
*/
console.log(magliana.citta);
console.log(magliana.dettagli());
var villa = /** @class */ (function (_super) {
    __extends(villa, _super);
    function villa(_mq, citta, indirizzo, tipologia) {
        var _this = _super.call(this, _mq, citta, indirizzo) || this;
        _this.tipologiaTrattativa = "Pubblica";
        _this.tipologiaTrattativa = tipologia;
        return _this;
    }
    villa.prototype.getTipologia = function () {
        return this.tipologiaTrattativa;
    };
    villa.prototype.setTipologia = function (tipo) {
        this.tipologiaTrattativa = tipo;
    };
    villa.prototype.dettagli = function () {
        return _super.prototype.dettagli.call(this) + "-" + this.tipologiaTrattativa;
    };
    return villa;
}(appartamento));
var eur = new villa(150, "Roma", "Viale Africa", "Privata");
console.log(eur.dettagli());
