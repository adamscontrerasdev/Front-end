import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos-dash',
  templateUrl: './proyectos-dash.component.html',
  styleUrls: ['./proyectos-dash.component.css']
})
export class ProyectosDashComponent implements OnInit {

  miPortfolio: any;
  proyectoTodo: Proyectos[] = [];
  constructor(private datosPortfolio: PortfolioService, private pro: ProyectoService) { }

  ngOnInit(): void {
    this.cargarPryecto();
    this.datosPortfolio.http.get<any>("https://adamsapplication-production.up.railway.app/ver/proyectos").subscribe(data => {
      this.miPortfolio = data
    });
  }
  guardarId(id: number): void {
    localStorage.setItem("id", id.toString());
  }

  cargarPryecto(): void {
    this.pro.lista().subscribe(data => { this.proyectoTodo = data })
  }

  eliminarProyecto(): void {
    const id = localStorage.getItem("id");
    this.pro.delete(parseInt(id)).subscribe(data => {
      this.cargarPryecto();
      window.location.reload();
      // window.location.reload();
    }, err => {
      alert("fallo");
    })
  }
}
