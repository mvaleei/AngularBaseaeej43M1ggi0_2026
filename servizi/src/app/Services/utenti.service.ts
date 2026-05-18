import { Injectable, inject } from "@angular/core";

import { HttpClient } from '@angular/common/http'

import { Utente } from "../Interfacce/Utente";

import { Observable } from "rxjs";


@Injectable(
    {
        providedIn: 'root'
    }
)
export class UtentiService {

    private readonly http = inject(HttpClient);


    //dichiaro l'url
    private url = "http://jsonplaceholder.typicode.com/users"



    getUtenti(): Observable<Array<Utente>> {
        return this.http.get<Array<Utente>>(this.url);
    }


}