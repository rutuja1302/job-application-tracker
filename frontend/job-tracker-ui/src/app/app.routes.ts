import { Routes } from '@angular/router';
import { Registeration } from './components/registeration/registeration';

export const routes: Routes = [
    {
        path: 'register',
        component: Registeration
    },
    {
        path: '**',
        component: Registeration
    }
];
