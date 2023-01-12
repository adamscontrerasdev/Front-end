import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  miPortfolio:any;
  
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.http.get<any>("https://adamsapplication-production.up.railway.app/ver/experiencia").subscribe(data =>{
      this.miPortfolio = data;
    });
  }

}
