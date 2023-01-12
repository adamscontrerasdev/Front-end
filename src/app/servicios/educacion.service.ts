import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  expUrl = 'https://adamsapplication-production.up.railway.app/ver/educacion';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.expUrl);
  }

  public verUna(id:number):Observable<any>{
    return this.httpClient.get<any>(`https://adamsapplication-production.up.railway.app/buscar/edu/${id}`)
  }

public save(edu:Educacion):Observable<any>{
  return this.httpClient.post<any>('https://adamsapplication-production.up.railway.app/new/educacion', edu);
}


public actualizar(id: number, exp:Educacion):Observable<any>{
  return this.httpClient.put<any>('https://adamsapplication-production.up.railway.app/edit/educacion', exp);
}

public verTodo(): Observable<Educacion>{
  return this.httpClient.get<Educacion>("https://adamsapplication-production.up.railway.app/ver/educacion");
}

public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(`https://adamsapplication-production.up.railway.app/borrar/edu/${id}`);
}}
