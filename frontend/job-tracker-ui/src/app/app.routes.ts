import { Routes } from '@angular/router';
import { Registeration } from './components/registeration/registeration';
import { Login } from './components/login/login';

export const routes: Routes = [
    {
        path: 'register',
        component: Registeration
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '**',
        component: Registeration
    }
];
