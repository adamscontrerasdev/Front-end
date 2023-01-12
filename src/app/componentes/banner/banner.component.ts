import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  miPortfolio:any;

  nombre:string= "";
  
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.http.get<any>("https://adamsapplication-production.up.railway.app/ver/personas").subscribe(data =>{
      
      this.miPortfolio = data
    });
  }

}
