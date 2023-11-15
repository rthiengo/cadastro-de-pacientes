import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private readonly API = 'http://localhost:3000/pacientes';

  constructor(private http: HttpClient) {}

  listar(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.API);
  }

  criar(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.API, paciente);
  }
}
