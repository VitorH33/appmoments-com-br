import { Component, OnInit } from '@angular/core';
import { EventoDTO } from '../../model/EventoDTO';
import { Router } from '@angular/router';
import { EventosService } from '../../servicos/eventos';
import { Evento } from '../../model/Evento';

@Component({
  selector: 'app-novoevento',
  templateUrl: './novoevento.html',
  standalone : false,
  styleUrl: './novoevento.css'
})
export class Novoevento implements OnInit {

  public evento: Evento = new Evento();
  public molduras: string[] = [];
  public selectedItem: string = "";
  
  public constructor(
    private eventoSrv: EventosService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.eventoSrv.recuperarMolduras().subscribe({
      next: (res: string[]) => {
        this.molduras = res;
        console.log(res);
      },
      error: (err: any) => {
        alert("Impossivel recuperar as molduras");
      }
    });
    
  }

  public cadastrarNovoEvento(){

    console.log("Evento original");
    console.log(this.evento);
    console.log("---------------------------------------------------");

    this.eventoSrv.criarEvento(this.evento).subscribe({
      next: (res: Evento) => {
        this.evento = res;
        alert("Evento criado com sucesso!");
        this.router.navigate(['/myevents']);
      },
      error: (err: any)=> {
        alert("ERRO ao criar evento");
        console.log(err);
      }
    });
  }

  public defineDataFim(): void{
    
    const pad = (n: number) => n < 10 ? '0' + n : n;
   

    let dataIni: Date = new Date(this.evento.dataHoraInicio);
    let date: Date;
    date = new Date(dataIni.getTime() + 4 * 60 * 60 * 1000);
  
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    
    let dataStr: string = `${year}-${month}-${day}T${hours}:${minutes}`;
    this.evento.dataHoraFim = dataStr;

  }
  
  public selecionarMoldura(moldura: string){
    this.selectedItem = moldura;
    this.evento.linkMoldura="https://appmoments.com.br/molduras/"+moldura;
  }
}