import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EventoDTO } from '../model/EventoDTO';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  public recuperarEventosDoCliente(): Observable<EventoDTO[]> {
    // recuperar o token do localStorage
    let tk = localStorage.getItem("AppToken")!;
    let header = {
      "Authorization": tk
    };
    return this.http.get<EventoDTO[]>(environment.apiURL + "/eventos", { headers: header })
  }
}