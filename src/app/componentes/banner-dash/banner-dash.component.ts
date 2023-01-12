import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { __values } from 'tslib';
import { CargarScriptsService } from "./../../cargar-scripts.service"
import { PersonaServiceService } from 'src/app/servicios/persona-service.service';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/model/persona';


@Component({
  selector: 'app-banner-dash',
  templateUrl: './banner-dash.component.html',
  styleUrls: ['./banner-dash.component.css']
})
export class BannerDashComponent implements OnInit {
  miPortfolio: any;
  nombreStrig: any;
  persona : Persona = null;

  constructor(private datosPortfolio:PortfolioService, private personal : PersonaServiceService, private activateRouter:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.personal.lista().subscribe(data => {
      this.persona = data[0];
    })

    this.datosPortfolio.http.get<any>("https://adamsapplication-production.up.railway.app/ver/personas").subscribe(data => {
      this.miPortfolio = data
    });
  }

  onEditarPersona(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.personal.actualizar(this.persona).subscribe(data => {
      window.location.reload();
    }, err => {
      alert("Error al enviar")
    })
  }

}
