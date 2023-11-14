import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css'],
})
export class ListarPacienteComponent implements OnInit {
  listaPacientes = [
    {
      nome: 'José da Silva Matos',
      sexo: 'M',
      idade: '72',
    },
    {
      nome: 'Maria Aparecida Soares',
      sexo: 'F',
      idade: '79',
    },
    {
      nome: 'Francineide Rosa dos Santos',
      sexo: 'F',
      idade: '67',
    },
    {
      nome: 'Juscelino Gomes de Almeida',
      sexo: 'M',
      idade: '81',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  

}
