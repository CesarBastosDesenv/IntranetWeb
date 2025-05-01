import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faCarSide, faChartBar, faClock, faKey, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { Agenda } from 'src/app/models/Agenda';
import { agendaService } from 'src/app/services/agendaService';

@Component({
  selector: 'app-visualiza-evento',
  templateUrl: './visualiza-evento.component.html',
  styleUrls: ['./visualiza-evento.component.css'],
  providers: [DatePipe],
})
export class VisualizaEventoComponent implements OnInit {
  public listaAgendas:Agenda[] = [];
  public faCarSide = faCarSide;
  public faChartBar = faChartBar;
  public faKey = faKey;
  public faClock = faClock;
  public faStreetView = faStreetView;
  public hoje = new Date();
  public pipe = new DatePipe('pt-BR');
 
  constructor (
    public agendaService : agendaService,
    private rest : agendaService
  ){}

  listarAgendas(){
    this.agendaService.ListarAgenda('previous').subscribe(res => {
      this.listaAgendas = res.data;
    })
   }

 
  ngOnInit(): void { 
    this.listarAgendas(); 
    }
}
