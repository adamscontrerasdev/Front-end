import { Injectable } from '@angular/core';
import { HardSkills } from '../model/hard-skills';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {
  hardUrl = 'https://adamsapplication-production.up.railway.app/ver/hardskill'

  constructor(private httpClient:HttpClient) { }
  public lista():Observable<HardSkills[]>{
    return this.httpClient.get<HardSkills[]>(this.hardUrl);
  }

  public verUna(id:number):Observable<any>{
    return this.httpClient.get<any>(`https://adamsapplication-production.up.railway.app/buscar/hard/${id}`)
  }

public save(hard:HardSkills):Observable<any>{
  return this.httpClient.post<any>('https://adamsapplication-production.up.railway.app/new/hard', hard);
}


public actualizar(id: number, hard:HardSkills):Observable<any>{
  return this.httpClient.put<any>('https://adamsapplication-production.up.railway.app/edit/hard', hard);
}

public verTodo(): Observable<HardSkills>{
  return this.httpClient.get<HardSkills>("https://adamsapplication-production.up.railway.app/ver/hard");
}

public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(`https://adamsapplication-production.up.railway.app/borrar/hard/${id}`);
}}
