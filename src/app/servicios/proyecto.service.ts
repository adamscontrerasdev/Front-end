import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  expUrl = 'https://adamsapplication-production.up.railway.app/ver/proyectos';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.expUrl);
  }

  public verUna(id:number):Observable<any>{
    return this.httpClient.get<any>(`https://adamsapplication-production.up.railway.app/buscar/pro/${id}`)
  }

public save(pro:Proyectos):Observable<any>{
  return this.httpClient.post<any>('https://adamsapplication-production.up.railway.app/new/pro', pro);
}


public actualizar(id: number, exp:Proyectos):Observable<any>{
  return this.httpClient.put<any>('https://adamsapplication-production.up.railway.app/edit/pro', exp);
}

public verTodo(): Observable<Proyectos>{
  return this.httpClient.get<Proyectos>("https://adamsapplication-production.up.railway.app/ver/pro");
}

public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(`https://adamsapplication-production.up.railway.app/borrar/pro/${id}`);
}}
