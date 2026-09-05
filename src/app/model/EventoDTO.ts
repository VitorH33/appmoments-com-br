export class EventoDTO{
    public uuid: string = "";
    public titulo: string = "";
    public frase: string = "";
    public inicio: Date = new Date();
    public fim: Date = new Date();
    public moldura: string = "";
    public statusFinanceiro: number = 0;
    public comprovante: string = "";
}