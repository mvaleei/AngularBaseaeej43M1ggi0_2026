import { Routes } from '@angular/router';

import { Body } from './body/body';

import { Contabilita } from './contabilita/contabilita';

import { Inserisci } from './inserisci/inserisci';
import { Saldo } from './saldo/saldo';

export const routes: Routes = [
    { path: "home", component: Body },
    {
        path: "contab",
        component: Contabilita,
        children: [
            { path: "inserisci", component: Inserisci },
            { path: "saldo", component: Saldo }
        ]
    }
];
