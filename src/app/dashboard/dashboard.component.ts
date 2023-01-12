import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { LoadService } from '../servicios/load.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  inicio:boolean;
  sloading$ = this.load.isLoading$
  constructor(private load:LoadService) { }

  ngOnInit(): void {
    localStorage.clear();
    if(!sessionStorage.getItem("iniciado")){
      sessionStorage.setItem("iniciado", "si");
      window.location.reload()
    }
  }

  recarga() :void{
    if(this.inicio != true){
      this.inicio = true;
      
    }
  }




}
