import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public cadastrarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(environment.apiURL+"/clientes", cliente);
  }

  public alterarDados(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(environment.apiURL+"/clientes/"+cliente.id, cliente);
  }

}