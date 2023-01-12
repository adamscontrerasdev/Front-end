import { Component, OnInit } from '@angular/core';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillService } from 'src/app/servicios/hard-skill.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills-dash',
  templateUrl: './skills-dash.component.html',
  styleUrls: ['./skills-dash.component.css']
})
export class SkillsDashComponent implements OnInit {

  miPortfolio:any;

  hardes:HardSkills[] = [];
  constructor(private datosPortfolio:PortfolioService, private hard:HardSkillService) { }

  ngOnInit(): void {
    this.cargarHard();
  }

  cargarHard():void{
    this.hard.lista().subscribe(data=> {this.hardes = data })
  }

  guardarId(id:number):void{
    localStorage.setItem("id", id.toString());
  }


  eliminar():void{
    const id = localStorage.getItem("id");
    this.hard.delete(parseInt(id)).subscribe(data=>{
      this.cargarHard();
      window.location.reload();
    }, err =>{
      alert("fallo");
    })
  }
}
