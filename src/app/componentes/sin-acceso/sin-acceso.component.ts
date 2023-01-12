import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sin-acceso',
  templateUrl: './sin-acceso.component.html',
  styleUrls: ['./sin-acceso.component.css']
})
export class SinAccesoComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit(): void {
  }

  volver():void{
    this.rutas.navigate([''])
  }
}
