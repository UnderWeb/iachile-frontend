import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatRutPipe } from './rut';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        FormatRutPipe
    ],
    exports: [
        FormatRutPipe
    ]
})
export class PipesModule { }
