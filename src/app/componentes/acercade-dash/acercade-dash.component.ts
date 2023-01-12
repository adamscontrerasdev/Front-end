import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { PersonaServiceService } from 'src/app/servicios/persona-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-acercade-dash',
  templateUrl: './acercade-dash.component.html',
  styleUrls: ['./acercade-dash.component.css']
})
export class AcercadeDashComponent implements OnInit {
  persona :Persona = null;
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService, private personal : PersonaServiceService, private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.personal.lista().subscribe(data =>{
      this.persona = data[0];
      
    })

    this.datosPortfolio.http.get<any>("https://adamsapplication-production.up.railway.app/ver/personas").subscribe(data =>{
      this.miPortfolio = data
    });
  }

  onEditarPersona(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.personal.actualizar(this.persona).subscribe(data =>{
      window.location.reload();
    }, err =>{
      alert("Error al enviar")
    })
  }

}
