import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule , MatCardModule } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';

/**
 * Routes.
 */
import { AppRoutes } from './app.routing';

/**
 * Pipes.
 */
import { PipesModule } from './shared';

/**
 * Components.
 */
import { AppBlankComponent } from './layouts';

/**
 * Modules.
 */
import { UsuarioModule } from './usuarios';

@NgModule({
    declarations: [
        AppComponent,
        AppBlankComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        PipesModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        UsuarioModule,
        RouterModule.forRoot(AppRoutes),
        NgxMaskModule.forRoot()
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
