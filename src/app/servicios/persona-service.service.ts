import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {
  personaUrl = 'https://adamsapplication-production.up.railway.app/ver/personas';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.personaUrl);
  }

public save(per:Persona):Observable<any>{
  return this.httpClient.post<any>('https://adamsapplication-production.up.railway.app/new/personas', per);
}


public actualizar(per:Persona):Observable<any>{
  return this.httpClient.put<any>('https://adamsapplication-production.up.railway.app/edit/persona', per);
}

// public deleta(per:Persona):Observable<any>{
//   return this.httpClient.post<any>('http://localhost:8080/new/personas', per);
// }
}
