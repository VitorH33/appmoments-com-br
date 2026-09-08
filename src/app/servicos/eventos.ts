import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EventoDTO } from '../model/EventoDTO';
import { Evento } from '../model/Evento';

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

  public criarEvento(evento: Evento): Observable<Evento> {
    let tk = localStorage.getItem("AppToken")!;
    let header = {
      "Authorization": tk
    }
    return this.http.post<Evento>(environment.apiURL + "/eventos", evento, { headers: header });
  }

  public atualizarEvento(evento: Evento): Observable<Evento> {
    let tk = localStorage.getItem("AppToken")!;
    let header = {
      "Authorization": tk
    }
    return this.http.put<Evento>(environment.apiURL + "/eventos/"+evento.uuid, evento, { headers: header });
  }

  public recuperarMolduras(): Observable<string[]>{
    let tk = localStorage.getItem("AppToken")!;
    let header = {
      "Authorization": tk
    }
    return this.http.get<string[]>(environment.apiURL+"/molduras", {headers: header})
  }
}