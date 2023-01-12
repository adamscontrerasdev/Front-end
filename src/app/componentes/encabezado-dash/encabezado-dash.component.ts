import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado-dash',
  templateUrl: './encabezado-dash.component.html',
  styleUrls: ['./encabezado-dash.component.css']
})
export class EncabezadoDashComponent implements OnInit {

    miPortfolio:any;
    isLogged = false;
    constructor(private datosPortfolio:PortfolioService, private token: TokenService, private rutas:Router) { }
  
    ngOnInit(): void {
  
      if(this.token.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged =false
      }
      this.datosPortfolio.http.get<any>("https://adamsapplication-production.up.railway.app/ver/redes").subscribe(data =>{
        this.miPortfolio = data
      });
    }
  
    onLogOut():void{
      this.token.logOut()
      this.rutas.navigate([''])
      sessionStorage.setItem("delDash","si")
    }

    menu() :void{
      const flecha = document.querySelector('.bx-up-arrow-alt');
      const headd = document.querySelector('.navbar');
  
      flecha.classList.toggle('abajo');
      headd.classList.toggle('bajar');
    }
  }
  