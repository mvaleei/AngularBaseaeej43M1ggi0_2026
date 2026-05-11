import { Routes } from '@angular/router';

import { Clienti } from './clienti/clienti';
import { Fornitori } from './fornitori/fornitori';
import { Fatture } from './fatture/fatture';
import { Magazzino } from './magazzino/magazzino';

import { Listato } from './listato/listato';
import { Inserisci } from './inserisci/inserisci';

export const routes: Routes = [
    { path: "clienti", component: Clienti },
    {
        path: "fatture",
        component: Fatture,
        children: [
            { path: "inserisci", component: Inserisci },
            { path: "listato", component: Listato }
        ]
    },
    { path: "fornitori", component: Fornitori },
    { path: "magazzino", component: Magazzino },

];
