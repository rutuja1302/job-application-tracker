import { Routes } from '@angular/router';
import { Registeration } from './components/registeration/registeration';
import { Login } from './components/login/login';
import { ManageApplications } from './components/manage-applications/manage-applications';

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
        path: 'manage-applications',
        component: ManageApplications
    },
    {
        path: '**',
        component: Registeration
    }
];
