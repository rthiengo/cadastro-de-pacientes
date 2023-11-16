import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';
import { RemoverComponent } from './componentes/remover/remover.component';
import { ListarPacienteComponent } from './componentes/listar-paciente/listar-paciente.component';
import { EditarComponent } from './componentes/editar/editar.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'adicionar', component: AdicionarComponent },
  //{ path: 'remover', component: RemoverComponent },
  { path: 'listar', component: ListarPacienteComponent },
  { path: 'remover/:id', component: RemoverComponent },
  { path: 'editar/:id', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
