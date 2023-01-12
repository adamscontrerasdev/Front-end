import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillService } from 'src/app/servicios/hard-skill.service';

@Component({
  selector: 'app-new-hard',
  templateUrl: './new-hard.component.html',
  styleUrls: ['./new-hard.component.css']
})
export class NewHardComponent implements OnInit {
  tecnologia: string = "";
  porcentaje: number = null;
  color: string = "#";
  constructor(private hard:HardSkillService, private ruta:Router) { }

  ngOnInit(): void {
  }


  onCreate(): void{
    const hardAgregar = new HardSkills(this.tecnologia, this.porcentaje, this.color);
    console.log(hardAgregar);
    
    this.hard.save(hardAgregar).subscribe(data =>{
      alert("Experiencia agregada con exito");
      this.ruta.navigate(['dashboard']);
    },err =>{
      alert("fallo");
      this.ruta.navigate(['dashboard']);
    })
  }
}
