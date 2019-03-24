export class Usuario {

    /**
     * Campos privados.
     */
    private id: string;
    private nombre: string;
    private telefono: string;
    private correo: string;
    private rut: string;

    /**
     * Constructor de la clase.
     * @param id string
     * @param nombre string
     * @param telefono string
     * @param correo string
     * @param rut string
     */
    constructor(id?: string, nombre?: string, telefono?: string, correo?: string, rut?: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.rut = rut;
    }

    /**
     * Obtiene el id del usuario.
     */
    get idUsuario(): string {
        return this.id
    }

    /**
     * Establece el id del usuario.
     */
    set idUsuario(id: string) {
        this.id = id;
    }

    /**
     * Obtiene el nombre del usuario.
     */
    get nombreUsuario(): string {
        return this.nombre
    }

    /**
     * Establece el nombre del usuario.
     */
    set nombreUsuario(nombre: string) {
        this.nombre = nombre;
    }

    /**
     * Obtiene el telefono del usuario.
     */
    get telefonoUsuario(): string {
        return this.telefono
    }

    /**
     * Establece el telefono del usuario.
     */
    set telefonoUsuario(telefono: string) {
        this.telefono = telefono;
    }

    /**
     * Obtiene el correo del usuario.
     */
    get correoUsuario(): string {
        return this.correo
    }

    /**
     * Establece el correo del usuario.
     */
    set correoUsuario(correo: string) {
        this.correo = correo;
    }

    /**
     * Obtiene el rut del usuario.
     */
    get rutUsuario(): string {
        return this.rut
    }

    /**
     * Establece el rut del usuario.
     */
    set rutUsuario(rut: string) {
        this.rut = rut;
    }
}
