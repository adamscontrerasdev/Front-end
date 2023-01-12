import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expUrl = 'https://adamsapplication-production.up.railway.app/ver/experiencia';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expUrl);
  }

  public verUna(id:number):Observable<any>{
    return this.httpClient.get<any>(`https://adamsapplication-production.up.railway.app/buscar/exp/${id}`)
  }

public save(exp:Experiencia):Observable<any>{
  return this.httpClient.post<any>('https://adamsapplication-production.up.railway.app/new/exp', exp);
}


public actualizar(id: number, exp:Experiencia):Observable<any>{
  return this.httpClient.put<any>('https://adamsapplication-production.up.railway.app/edit/experiencia', exp);
}

public verTodo(): Observable<Experiencia>{
  return this.httpClient.get<Experiencia>("https://adamsapplication-production.up.railway.app/ver/experiencia");
}

public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(`https://adamsapplication-production.up.railway.app/borrar/exp/${id}`);
}}
