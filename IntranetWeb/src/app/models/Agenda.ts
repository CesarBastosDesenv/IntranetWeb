export class Agenda{
    public id : number;
    public titulo : string;
    public data : Date;
    public horaInicio : string;
    public horaFim : string;
    public local : string;
    public descricao : string;
    public status : boolean;

    constructor (data: any = {}){
        if (data == null || data == undefined ) { data = {}; }

    this.id = data.id;
    this.titulo = data.titulo;
    this.data = data.data;
    this.horaInicio = data.horaInicio;
    this.horaFim = data.horaFim;
    this.local = data.local;
    this.descricao = data.descricao;
    this.status = data.status;
    }

}