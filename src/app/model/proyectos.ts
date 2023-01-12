export class Proyectos {

    id: number;
    nombre_proyecto: string;
    descripcion: string;
    url_pagina: string;
    imagen: string;
    persona_id:number;

    constructor(id:number,
        nombre_proyecto: string,
        descripcion: string,
        url_pagina: string,
        imagen: string,
        persona_id:number) {

        this.id = null;
        this.nombre_proyecto = nombre_proyecto;
        this.descripcion = descripcion;
        this.url_pagina = url_pagina;
        this.imagen = imagen;
        this.persona_id = persona_id;
    }


}
