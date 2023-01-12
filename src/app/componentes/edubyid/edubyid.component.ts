import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edubyid',
  templateUrl: './edubyid.component.html',
  styleUrls: ['./edubyid.component.css']
})
export class EdubyidComponent implements OnInit {
  eduTodo:Educacion = null;
  constructor(private edu: EducacionService, private ruta: Router,private act: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.act.snapshot.params['id'];
    this.edu.verUna(id).subscribe(data => {
      this.eduTodo = data
    }, err => {
      alert("Error")
      this.ruta.navigate(['']);
    })
  }
  onUpdate() {
    const id = this.act.snapshot.params['id'];
    this.edu.actualizar(id, this.eduTodo).subscribe(data => {
      alert("Exito")
      this.ruta.navigate(['dashboard']);
    },err =>{
      alert("Error al editar experiencia")
    })
  }
}
