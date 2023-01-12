import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {
  foto:string= "";
  nombreE:string = "";
  descripcion:string = "";

  constructor(private edu:EducacionService, private ruta:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Educacion(this.foto, this.nombreE, this.descripcion);
    console.log(expe);
    
    this.edu.save(expe).subscribe(data =>{
      alert("Educacion agregada con exito");
      this.ruta.navigate(['dashboard']);
    },err =>{
      alert("fallo");
      this.ruta.navigate(['dashboard']);
    })
  }
}
