import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http'

import { Utente } from "../Interfacce/Utente";

import { Observable } from "rxjs";


@Injectable(
    {
        providedIn: 'root'
    }
)
export class UtentiService {

    constructor(
        private Chiamata: HttpClient
    ) { }


    //dichiaro l'url
    private url = "https://jsonplaceholder.typicode.com/users"


    getUtenti(): Observable<Array<Utente>> {
        return this.Chiamata.get<Array<Utente>>(this.url);
    }



}