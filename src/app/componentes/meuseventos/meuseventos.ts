import { Component, OnInit } from '@angular/core';
import { EventoDTO } from '../../model/EventoDTO';
import { EventosService } from '../../servicos/eventos';

@Component({
  selector: 'app-meuseventos',
  templateUrl: './meuseventos.html',
  standalone: false,
  styleUrl: './meuseventos.css'
})
export class Meuseventos implements OnInit {
  public lista: EventoDTO[] = [];
  public eventoUUID: string = "";
  public urlPhoto: string = "";
  public constructor(private srv: EventosService){

  }
  ngOnInit(): void {
    this.srv.recuperarEventosDoCliente().subscribe({
      next: (res : EventoDTO[]) => {
        this.lista = res;
        console.log(this.lista);
      },
      error:(err: any) => {
        alert("Erro ao recuperar eventos")
      }
    })
  }

}