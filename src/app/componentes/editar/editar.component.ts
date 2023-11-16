import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  paciente: Paciente = {
    nome: '',
    sexo: '',
    idade: 1,
  };

  constructor(
    private service: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((paciente) => {
      this.paciente = paciente;
    });
  }

  editarPaciente() {
    this.service.editar(this.paciente).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

  cancelar() {
    this.router.navigate(['/listar']);
  }
}
