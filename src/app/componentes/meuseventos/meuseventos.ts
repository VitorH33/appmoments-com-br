import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public constructor(
    private srv: EventosService,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ){

  }
  ngOnInit(): void {
    if (!localStorage.getItem('AppToken')) {
      this.router.navigate(['/login']);
      return;
    }

    this.srv.recuperarEventosDoCliente().subscribe({
      next: (res : EventoDTO[]) => {
        this.lista = res;
        this.changeDetector.detectChanges();
        console.log(this.lista);
      },
      error:(err: any) => {
        if (err.status === 401 || err.status === 403) {
          localStorage.removeItem('AppToken');
          alert('Sua sessão expirou. Faça login novamente.');
          this.router.navigate(['/login']);
          return;
        }

        alert("Erro ao recuperar eventos")
      }
    })
  }

}