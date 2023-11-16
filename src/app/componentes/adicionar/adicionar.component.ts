import { PacienteService } from './../paciente.service';
import { Paciente } from './../paciente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private service: PacienteService, private router: Router) {}

  ngOnInit(): void {}

  adicionarPaciente() {
    this.service.criar(this.paciente).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

  cancelar() {
    this.router.navigate(['/listar']);
  }
}
