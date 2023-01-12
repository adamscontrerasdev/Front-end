export class HardSkills {
    id: number;
    tecnologia: string;
    porcentaje: number;
    color: string;
    color_secundario: string;
    persona_id: number;

    constructor(tecnologia: string,
        porcentaje: number,
        color: string,
        ) {

        this.id= null;
        this.tecnologia= tecnologia;
        this.porcentaje= porcentaje;
        this.color= color;
        this.color_secundario= "#fff";
        this.persona_id= 1;
    }
}

