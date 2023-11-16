import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-remover',
  templateUrl: './remover.component.html',
  styleUrls: ['./remover.component.css']
})
export class RemoverComponent implements OnInit{

  paciente: Paciente = {
    id: 1,
    nome: '',
    sexo: '',
    idade: 1,
  };

  constructor(
    private service: PacienteService,
    private router: Router,
    private route: ActivatedRoute /*traz informações das rotas que vão vir do paciente*/
  ){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.buscarPorId(parseInt(id!)).subscribe((paciente) => {
        this.paciente = paciente;
      })
  }

  excluir(){
    if(this.paciente.id){
      this.service.excluir(this.paciente.id).subscribe(() => {
        this.router.navigate(['/listar'])
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listar'])
  }


}
