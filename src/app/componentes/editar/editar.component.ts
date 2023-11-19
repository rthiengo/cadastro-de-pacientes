import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private service: PacienteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [''],
      sexo: [''],
      idade: [],
      endereco: [''],
      cidade: [''],
      estado: [''],
      comorbidades: [''],
      sintomas: [''],
      variante: [''],
      dias: [],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((paciente) => {
      this.formulario = this.formBuilder.group({
        id: [paciente.id],
        nome: [
          paciente.nome,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
            Validators.pattern('[a-zA-Z ]*'),
          ]),
        ],
        sexo: [
          paciente.sexo,
          Validators.compose([
            Validators.required,
            Validators.pattern('[MF ]*'),
            Validators.maxLength(1),
          ]),
        ],
        idade: [
          paciente.idade,
          Validators.compose([Validators.required, Validators.max(140)]),
        ],
        endereco: [paciente.endereco],
        cidade: [paciente.cidade],
        estado: [paciente.estado],
        comorbidades: [paciente.comorbidades],
        sintomas: [paciente.sintomas],
        variante: [paciente.variante],
        dias: [paciente.dias],
      });
    });
  }

  editarPaciente() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

  cancelar() {
    this.router.navigate(['/listar']);
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
