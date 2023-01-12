import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre_proyecto: string = "";
  descripcion: string = "";
  url_pagina: string = "";
  imagen: string = "";
  constructor(private pro: ProyectoService, private ruta: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyectos(null,
      this.nombre_proyecto,
      this.descripcion,
      this.url_pagina,
      this.imagen,
      1);
    console.log(expe);

    this.pro.save(expe).subscribe(data => {
      alert("Proyecto agregada con exito");
      this.ruta.navigate(['dashboard']);
    }, err => {
      alert("fallo");
      this.ruta.navigate(['dashboard']);
    })
  }

}
