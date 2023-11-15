import { PacienteService } from './../paciente.service';
import { Paciente } from './../paciente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})
export class AdicionarComponent implements OnInit {
  paciente: Paciente = {
    nome: '',
    sexo: '',
    idade: 1,
  };

  constructor(private service: PacienteService) {}

  ngOnInit(): void {}

  adicionarPaciente() {
    this.service.criar(this.paciente).subscribe();
  }

  cancelar() {
    alert('Ação cancelada');
  }
}
