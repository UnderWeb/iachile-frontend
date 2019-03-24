import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Usuario } from '../models';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    /**
     * Constructor de la clase.
     * @param http HttpClient
     */
    constructor(private http: HttpClient) { }

    /**
     * Registra un nuevo usuario.
     * @param usuario Usuario
     */
    postUsuario(usuario: Usuario) {
        return this.http.post(`${environment.apiBaseUrl}/landing/subscriptions`, usuario);
    }

    /**
     * Comprueba la exstencia del rut del usuario.
     * @param rut string
     */
    uniqueRutUsuario(rut: string) {
        return this.http.get(`${environment.apiBaseUrl}/landing/unique-rut/${rut}`);
    }

    /**
     * Comprueba la exstencia del correo electrónico del usuario.
     * @param email string
     */
    uniqueEmailUsuario(email: string) {
        return this.http.get(`${environment.apiBaseUrl}/landing/unique-email/${email}`);
    }
}
