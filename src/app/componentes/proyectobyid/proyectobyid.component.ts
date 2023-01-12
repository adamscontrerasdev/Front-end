import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectobyid',
  templateUrl: './proyectobyid.component.html',
  styleUrls: ['./proyectobyid.component.css']
})
export class ProyectobyidComponent implements OnInit {

  proyecto:Proyectos = null;
  constructor(private act:ActivatedRoute, private pro:ProyectoService, private ruta:Router) { }

  ngOnInit(): void {
    const id = this.act.snapshot.params['id'];
    this.pro.verUna(id).subscribe(data => {
      this.proyecto = data
    }, err => {
      alert("Error")
      this.ruta.navigate(['']);
    })
  }

  onUpdate() {
    const id = this.act.snapshot.params['id'];
    this.pro.actualizar(id, this.proyecto).subscribe(data => {
      alert("Exito")
      this.ruta.navigate(['dashboard']);
    },err =>{
      alert("Error al editar experiencia")
    })
  }
}
