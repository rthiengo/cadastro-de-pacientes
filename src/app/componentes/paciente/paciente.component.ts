import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit{

  @Input() paciente: Paciente = {
    
    nome: '',
    sexo: '',
    idade: 1,
  }

  constructor(){

  }

  ngOnInit(): void {
      
  }

}
