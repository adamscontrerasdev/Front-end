import {Component, OnInit } from '@angular/core';
import { LoadService } from '../servicios/load.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  isloading$ = this.load.isLoading$
  constructor(private load:LoadService) { }


  
  ngOnInit(): void {
    localStorage.clear();
    if(sessionStorage.getItem("delDash")){
      sessionStorage.removeItem("delDash")
      window.location.reload()
    }
  }

}
