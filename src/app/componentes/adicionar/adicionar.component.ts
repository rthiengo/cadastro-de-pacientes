import { PacienteService } from './../paciente.service';
import { Paciente } from './../paciente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})
export class AdicionarComponent implements OnInit {
  
  formulario!: FormGroup;

  constructor(
    private service: PacienteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id:[],
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.pattern('[a-zA-Z ]*'),
        ]),
      ],
      sexo: [
        '',
        Validators.compose([Validators.required, Validators.pattern('[MF ]*'),Validators.maxLength(1)]),
      ],
      idade: [
        ,
        Validators.compose([Validators.required, Validators.max(140)])
      ],
      endereco: [''],
      cidade: [''],
      estado: [''],
      comorbidades: [''],
      sintomas: [''],
      variante: [''],
      dias: [ ],
    });
  }

  adicionarPaciente() {
    console.log(this.formulario.get('idade')?.errors)
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listar']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listar']);
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }

  }

}
