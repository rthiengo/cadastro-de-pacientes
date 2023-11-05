import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';
import { RemoverComponent } from './componentes/remover/remover.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'remover', component: RemoverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
