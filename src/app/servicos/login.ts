import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MomentsToken } from '../model/MomentsToken';
import { LoginDTO } from '../model/LoginDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public realizarLogin(loginDTO: LoginDTO): Observable<MomentsToken>{
    return this.http.post<MomentsToken>(environment.apiURL+"/login", loginDTO);
    
  }
}