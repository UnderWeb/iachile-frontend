import { Routes } from '@angular/router';
import { UsuarioCreateComponent } from './components';

export const UsuarioRoutes: Routes = [
    {
        path: 'registro',
        children: [
            {
                path: '',
                component: UsuarioCreateComponent
            }
        ]
    }
];
