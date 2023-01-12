import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
  foto:string= "";
  nombreE:string = "";
  descripcion:string = "";
  
  
  constructor(private datosPortfolio: PortfolioService, private expp: ExperienciaService, private act: ActivatedRoute,
    private ruta: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(null, this.foto, this.nombreE, this.descripcion, 1);
    console.log(expe);
    
    this.expp.save(expe).subscribe(data =>{
      alert("Experiencia agregada con exito");
      this.ruta.navigate(['dashboard']);
    },err =>{
      alert("fallo");
      this.ruta.navigate(['dashboard']);
    })
  }

}
