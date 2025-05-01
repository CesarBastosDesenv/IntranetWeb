import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastrarEventoComponent } from './Pages/Agenda/cadastrar-evento/cadastrar-evento.component';
import { VisualizaEventoComponent } from './Pages/Agenda/visualiza-evento/visualiza-evento.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { agendaService } from './services/agendaService';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarEventoComponent,
    VisualizaEventoComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    agendaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
