import { Routes } from '@angular/router';
import { AppBlankComponent } from './layouts';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AppBlankComponent,
        children: [
            {
                path: '',
                loadChildren: './usuarios/usuario.module#UsuarioModule'
            }
        ]
    }
];
