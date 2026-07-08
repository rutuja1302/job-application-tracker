import { Routes } from '@angular/router';
import { Registeration } from './components/registeration/registeration';
import { Login } from './components/login/login';
import { ManageApplications } from './components/manage-applications/manage-applications';
import { authGuard } from './guards/auth-guard';

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
        component: ManageApplications,
        canActivate: [authGuard]
    },
    {
        path: '**',
        component: Registeration
    }
];
