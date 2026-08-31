import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { ClienteService } from '../../servicos/cliente';
import { ClienteResponseDTO } from '../../model/ClienteResponseDTO';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro implements OnInit {

  public cliente: Cliente;
  public senhaExtra: string;
  public senhaMSG = "";
  public modalMSG = "";

  public constructor(private clienteSrv: ClienteService, private router: Router, private cdr: ChangeDetectorRef){
    this.cliente = new Cliente();
    this.senhaExtra = "";
    this.senhaMSG = "";
  }
  ngOnInit(): void {
   
  }
  public confereSenha(): void{
    if ((this.senhaExtra == "" && this.cliente.senha == "") || this.senhaExtra != this.cliente.senha){
      this.senhaMSG = "Senhas não conferem";
    }
    else{
      this.senhaMSG = "";
    }
  }

  public enviarDados(){
     console.log('Dados enviados:', this.cliente);
    this.clienteSrv.cadastrarCliente(this.cliente).subscribe({
      next:  (res: Cliente)=> {
        this.exibeModal("Cliente cadastrado com sucesso!")
        this.cliente = new Cliente();
        this.senhaExtra = "";
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        this.exibeModal("ERRO - "+err.error.mensagem);
      }
    });
  }

  public exibeModal(msg: string): void {
    this.modalMSG = msg;
    this.cdr.detectChanges(); // força a atualização da view
    document.getElementById("btnModal")?.click();
}

}