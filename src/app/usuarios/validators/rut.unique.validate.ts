import { AbstractControl } from '@angular/forms';
import { UserService } from '../services';
import { map } from 'rxjs/operators';

export class RutUniqueValidate {

    /**
     * Valida el registro único del usuario mediante su rut.
     * @param _userService UserService
     */
    rutValidator(_userService: UserService) {
        return (control: AbstractControl) => {
            return _userService.uniqueRutUsuario(control.value).pipe(map(
                (response: any) => {
                    return response.valid ? { existsRut: true } : null;
                }
            ));
        }
    }
}
