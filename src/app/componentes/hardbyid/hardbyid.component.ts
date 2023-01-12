import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillService } from 'src/app/servicios/hard-skill.service';

@Component({
  selector: 'app-hardbyid',
  templateUrl: './hardbyid.component.html',
  styleUrls: ['./hardbyid.component.css']
})
export class HardbyidComponent implements OnInit {

  miPortfolio: any;
  hardSkill: HardSkills = null;


  constructor(private hard: HardSkillService, private act: ActivatedRoute,
    private ruta: Router) { }

  ngOnInit(): void {
    const id = this.act.snapshot.params['id'];
    this.hard.verUna(id).subscribe(data => {
      this.hardSkill = data
    }, err => {
      alert("Error")
      this.ruta.navigate(['']);
    })
  }

  onUpdate() {
    const id = this.act.snapshot.params['id'];
    this.hard.actualizar(id, this.hardSkill).subscribe(data => {
      alert("Exito")
      this.ruta.navigate(['dashboard']);
    },err =>{
      alert("Error al editar experiencia")
    })
  }
}
