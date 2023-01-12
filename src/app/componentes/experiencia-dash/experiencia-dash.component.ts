import { Component, OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-dash',
  templateUrl: './experiencia-dash.component.html',
  styleUrls: ['./experiencia-dash.component.css']
})


export class ExperienciaDashComponent implements OnInit{
  expTodo: Experiencia = null;
  expe:Experiencia[] = []
  miPortfolio: any;

  
  constructor(private datosPortfolio: PortfolioService, private expp: ExperienciaService, private ruta: Router) { }

  ngOnInit(): void {
    this.cargarExp();
    this.expp.verTodo().subscribe(data =>{
      this.expTodo = data
    })
  }
  


  cargarExp():void{
    this.expp.lista().subscribe(data=>{this.expe = data;})
  }

  guardarId(id:number):void{
    localStorage.setItem("id", id.toString());
  }

  eliminar():void{
    const id = localStorage.getItem("id");
    this.expp.delete(parseInt(id)).subscribe(data =>{
      this.cargarExp();
      window.location.reload();
      localStorage.clear();
    }, err =>{
      alert("fallo");
    })
  }

}
