import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css'],
})
export class ListarPacienteComponent implements OnInit {
  listaPacientes: Paciente[] = [];

  constructor(private service: PacienteService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPacientes) => {
      this.listaPacientes = listaPacientes;
    });
    
  }
}
