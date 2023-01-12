import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion-dash',
  templateUrl: './educacion-dash.component.html',
  styleUrls: ['./educacion-dash.component.css']
})
export class EducacionDashComponent implements OnInit {

  eduTodo: Educacion = null;
  edu:Educacion[] = []
  constructor(private datosPortfolio:PortfolioService, private eduSer:EducacionService) { }

  ngOnInit(): void {
this.cargarEducacion();
  }

  cargarEducacion():void{
    this.eduSer.lista().subscribe(data=>{ this.edu = data});
  }

  guardarId(id:number):void{
    localStorage.setItem("id", id.toString());
  }

  eliminarEducacion():void{
    const idt = localStorage.getItem("id");
    this.eduSer.delete(parseInt(idt)).subscribe(data =>{
      this.cargarEducacion();
      window.location.reload();
      // window.location.reload();
    }, err =>{
      alert("fallo");
    })
  }
}
