export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    contraseña: string;
    telefono: number;
    fecha_nacimiento: string;
    perfil_url: string;
    titulo: string;
    banner_url: string;
    sobre_mi: string;

    constructor(
        nombre: string,
        apellido: string,
        correo: string,
        contraseña: string,
        telefono: number,
        fecha_nacimiento: string,
        perfil_url: string,
        titulo: string,
        banner_url: string,
        sobre_mi: string) { 
            

        this.nombre = nombre 
        this.apellido =  apellido
        this.correo =  correo
        this.contraseña =  contraseña
        this.telefono =  telefono
        this.fecha_nacimiento =  fecha_nacimiento
        this.perfil_url =  perfil_url
        this.titulo =  titulo
        this.banner_url =  banner_url
        this.sobre_mi =  sobre_mi
        }
}