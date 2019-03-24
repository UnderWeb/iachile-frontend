import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatInputModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleCasePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

/**
 * Routes.
 */
import { UsuarioRoutes } from './usuario.routing';

/**
 * Services.
 */
import { UserService } from './services';

/**
 * Components.
 */
import { UsuarioCreateComponent } from './components';

/**
 * Validators.
 */
import { RutUniqueValidate, EmailUniqueValidate } from './validators';

/**
 * Pipes.
 */
import { PipesModule, FormatRutPipe } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UsuarioRoutes),
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forChild(),
        PipesModule
    ],
    declarations: [
        UsuarioCreateComponent
    ],
    providers: [
        UserService,
        RutUniqueValidate,
        EmailUniqueValidate,
        TitleCasePipe,
        UpperCasePipe,
        LowerCasePipe,
        FormatRutPipe
    ]
})
export class UsuarioModule {}
