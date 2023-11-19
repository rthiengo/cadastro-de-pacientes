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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './componentes/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PaginaInicialComponent,
    AdicionarComponent,
    RemoverComponent,
    PacienteComponent,
    ListarPacienteComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, //permite formulário reativo
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
