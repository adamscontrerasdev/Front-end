import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private url: string = 'https://adamsapplication-production.up.railway.app/ver/';


  constructor(public http: HttpClient) { }

  // public obtenerDatos(): Observable<any> {
  //   return this.http.get<any>(this.url + 'personas');
  // }

  put(url:string, body: any){
    return this.http.put(url, body)
  }


}
