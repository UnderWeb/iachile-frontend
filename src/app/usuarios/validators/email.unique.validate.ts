import { AbstractControl } from '@angular/forms';
import { UserService } from '../services';
import { map } from 'rxjs/operators';

export class EmailUniqueValidate {

    /**
     * Valida el registro único del usuario mediante su correo electrónico.
     * @param _userService UserService
     */
    emailValidator(_userService: UserService) {
        return (control: AbstractControl) => {
            return _userService.uniqueEmailUsuario(control.value).pipe(map(
                (response: any) => {
                    return response.valid ? { existsEmail: true } : null;
                }
            ));
        }
    }
}
