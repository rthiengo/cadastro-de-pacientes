import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';
import { RemoverComponent } from './componentes/remover/remover.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { ListarPacienteComponent } from './componentes/listar-paciente/listar-paciente.component';

@NgModule({
  declarations: [AppComponent, CabecalhoComponent, RodapeComponent, PaginaInicialComponent, AdicionarComponent, RemoverComponent, PacienteComponent, ListarPacienteComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
