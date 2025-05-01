import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEventoComponent } from './Pages/Agenda/cadastrar-evento/cadastrar-evento.component';
import { VisualizaEventoComponent } from './Pages/Agenda/visualiza-evento/visualiza-evento.component';

const routes: Routes = [
  { path: '', component: VisualizaEventoComponent },
  { path: 'CadastarEvento', component: CadastrarEventoComponent},
  { path: '**', component: VisualizaEventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
