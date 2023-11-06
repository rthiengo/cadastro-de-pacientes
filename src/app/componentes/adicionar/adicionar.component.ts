import { Component } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})
export class AdicionarComponent {
  adicionarPaciente() {
    alert('Novo Paciente Criado!');
  }

  cancelar() {
    alert('Ação cancelada');
  }
}
