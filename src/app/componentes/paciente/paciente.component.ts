import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit{

  @Input() paciente = {
    nome: '',
    sexo: '',
    idade: '',
  }

  constructor(){

  }

  ngOnInit(): void {
      
  }

}
