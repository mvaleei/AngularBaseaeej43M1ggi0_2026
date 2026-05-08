import { Routes } from '@angular/router';

import { Clienti } from './clienti/clienti';
import { Fornitori } from './fornitori/fornitori';
import { Fatture } from './fatture/fatture';
import { Magazzino } from './magazzino/magazzino';

export const routes: Routes = [
    { path: "clienti", component: Clienti },
    { path: "fatture", component: Fatture },
    { path: "fornitori", component: Fornitori },
    { path: "magazzino", component: Magazzino },

];
