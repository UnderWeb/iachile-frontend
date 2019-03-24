import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleCasePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { CustomValidators } from 'ng2-validation';
import Swal from 'sweetalert2';

/**
 * Services.
 */
import { UserService } from '../services';

/**
 * Models.
 */
import { Usuario } from '../models';

/**
 * Validators.
 */
import { rutValidator, personNameValidator } from '../../shared';
import { RutUniqueValidate, EmailUniqueValidate } from '../validators';

/**
 * Pipes.
 */
import { FormatRutPipe } from '../../shared';

@Component({
    selector: 'app-usuario-create',
    templateUrl: './usuario-create.component.html',
    styleUrls: ['./usuario-create.component.scss']
})
export class UsuarioCreateComponent {

    /**
     * Campos privados.
     */
    private usuario: Usuario;

    /**
     * Campos públicos.
     */
    public form: FormGroup;

    /**
     * Constructor de la clase.
     * @param _userService UserService
     * @param _rutUniqueValidate RutUniqueValidate
     * @param _emailUniqueValidate EmailUniqueValidate
     * @param _formatRutPipe: FormatRutPipe
     * @param router Router
     * @param titleCasePipe: TitleCasePipe
     * @param upperCasePipe: UpperCasePipe
     * @param lowerCasePipe: LowerCasePipe
     * @param formBuilder FormBuilder
     */
    constructor(
        private _userService: UserService,
        private _rutUniqueValidate: RutUniqueValidate,
        private _emailUniqueValidate: EmailUniqueValidate,
        private _formatRutPipe: FormatRutPipe,
        private router: Router,
        private titleCasePipe: TitleCasePipe,
        private upperCasePipe: UpperCasePipe,
        private lowerCasePipe: LowerCasePipe,
        public formBuilder: FormBuilder
    ) {
        this.usuario = new Usuario();
        this.getForm();
    }

    /**
     * Obtiene el rut del usuario.
     */
    get rut() {
        return this.form.get('rut');
    }

    /**
     * Obtiene el correo del usuario.
     */
    get correo() {
        return this.form.get('correo');
    }

    /**
     * Construye el formulario de registro.
     */
    private getForm() {
        this.form = this.formBuilder.group({
            'nombre': [null, Validators.compose([Validators.required, Validators.minLength(3), personNameValidator])],
            'telefono': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
            'correo': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'rut': [null, Validators.compose([Validators.required, Validators.minLength(7), rutValidator])]
        });
        this.handleFormChanges();
    }

    /**
     * Validaciones asíncronas de campos únicos.
     */
    handleFormChanges() {
        this.rut.valueChanges.subscribe(
            rut => {
                // Formatea el rut a medida que se va escribiendo.
                const format = this._formatRutPipe.transform(rut);
                if (rut !== format) {
                    this.form.patchValue({rut: format});
                }

                // Valida la existencia del rut asíncronamente.
                if (rut !== 'undefined' && rut !== null) {
                    this.rut.setAsyncValidators(this._rutUniqueValidate.rutValidator(this._userService));
                }
            }
        );
    
        this.correo.valueChanges.subscribe(
            correo => {
                // Valida la existencia del correo asíncronamente.
                if (correo !== 'undefined' && correo !== null) {
                    this.correo.setAsyncValidators(this._emailUniqueValidate.emailValidator(this._userService));
                }
            }
        );
    }

    /**
     * Determina si se ha pegado el valor del rut para su validación.
     */
    public onRutPaste() {
        this.rut.setValue('');
    }

    /**
     * Determina si se ha pegado el valor del correo para su validación.
     */
    public onEmailPaste() {
        this.correo.setValue('');
    }

    /**
     * Ingresa un nuevo usuario.
     */
    onSubmit() {
        if (this.form.valid) {
            const data = this.form.getRawValue();
            this.form.disable();
            this.createUsuario(data);
        }
    }

    /**
     * Crea un nuevo usuario.
     */
    private createUsuario(data: any): void {
        let telefono = '+' + data.telefono;
        this.usuario.nombreUsuario = this.titleCasePipe.transform(this.lowerCasePipe.transform(data.nombre.trim()));
        this.usuario.telefonoUsuario = telefono.replace(/(.{4})/g,"$1 ");
        this.usuario.correoUsuario = this.lowerCasePipe.transform(data.correo.trim());
        this.usuario.rutUsuario = this.upperCasePipe.transform(data.rut.trim());

        this._userService.postUsuario(this.usuario).subscribe(
            (response: any) => {
                const user = response.data;
                if (response) {
                    this.form.reset();
                    this.form.enable();

                    Swal.fire({
                        type: 'success',
                        title: 'Usuario ingresado correctamente',
                        html:
                            '<p>Los siguientes datos fueron introducidos:</p>, ' + 
                            'Nombre: ' + user.nombre + 
                            '<br>Teléfono: ' + user.telefono + 
                            '<br>Correo: ' + user.correo + 
                            '<br>Rut: ' + user.rut,
                        confirmButtonColor: '#57BD95',
                        confirmButtonText: 'Aceptar',
                        allowEnterKey: false,
                        allowOutsideClick: false
                    });
                    this.router.navigate(['/']);
                }
            },
            error => {
                console.log(<any>error);
                Swal.fire({
                    type: 'error',
                    text: 'Error al ingresar al usuario. Si el problema persiste, por favor contacte a soporte',
                    confirmButtonColor: '#57BD95',
                    confirmButtonText: 'Aceptar',
                    allowEnterKey: false,
                    allowOutsideClick: false
                });
                this.router.navigate(['/']);
            }
        );
    }
}
