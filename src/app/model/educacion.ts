export class Educacion {

    id: number;
    imagen: string;
    instituto: string;
    descripcion_rapida: string;
    persona_id: number;

    constructor(imagen: string,
        instituto: string,
        descripcion_rapida: string) {

        this.id = null;
        this.imagen = imagen;
        this.instituto = instituto;
        this.descripcion_rapida = descripcion_rapida;
        this.persona_id = 1;
    }

}
