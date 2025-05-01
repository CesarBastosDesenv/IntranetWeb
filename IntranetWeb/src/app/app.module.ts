import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastrarEventoComponent } from './Pages/Agenda/cadastrar-evento/cadastrar-evento.component';
import { VisualizaEventoComponent } from './Pages/Agenda/visualiza-evento/visualiza-evento.component';

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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
