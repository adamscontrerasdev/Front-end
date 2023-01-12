export class Experiencia {
    id:number;
    imagen:string;
    nombre_de_experiencia:string;
    descripcion_rapida:string;
    persona_id:number;

    constructor(id:number,
        imagen:string,
        nombre_de_experiencia:string,
        descripcion_rapida:string,
        persona_id:number
        )
        {   
            this.id = id;
            this.imagen = imagen;
            this.nombre_de_experiencia = nombre_de_experiencia;
            this.descripcion_rapida = descripcion_rapida;
            this.persona_id = persona_id;
        }
}
