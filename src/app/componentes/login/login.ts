import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../../model/LoginDTO';
import { MomentsToken } from '../../model/MomentsToken';
import { Router } from '@angular/router';
import { LoginService } from '../../servicos/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
   standalone: false,
  styleUrl: './login.css'
})
export class Login implements OnInit{

  public loginDTO: LoginDTO;
  public constructor(private service: LoginService, private router: Router){
    this.loginDTO = new LoginDTO();
  }

  ngOnInit(): void {
    
  }

  public enviarDados(): void{
    this.service.realizarLogin(this.loginDTO).subscribe({
      next: (res: MomentsToken) => {
        localStorage.setItem("AppToken", res.token);
        this.router.navigate(['/myevents']);
      },
      error: (err: any) => {
        console.log(err);       
        alert("login falhou");
      }
    });
  }

}