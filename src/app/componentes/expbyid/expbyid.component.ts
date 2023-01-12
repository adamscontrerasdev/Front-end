import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-expbyid',
  templateUrl: './expbyid.component.html',
  styleUrls: ['./expbyid.component.css']
})
export class ExpbyidComponent implements OnInit {
  miPortfolio: any;
  experiencia: Experiencia = null;


  constructor(private datosPortfolio: PortfolioService, private expp: ExperienciaService, private act: ActivatedRoute,
    private ruta: Router) { }

  ngOnInit(): void {
    const id = this.act.snapshot.params['id'];
    this.expp.verUna(id).subscribe(data => {
      this.experiencia = data
    }, err => {
      alert("Error")
      this.ruta.navigate(['']);
    })
  }

  onUpdate() {
    const id = this.act.snapshot.params['id'];
    this.expp.actualizar(id, this.experiencia).subscribe(data => {
      alert("Exito")
      this.ruta.navigate(['dashboard']);
    },err =>{
      alert("Error al editar experiencia")
    })
  }

}
