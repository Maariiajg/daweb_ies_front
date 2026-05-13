import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Matricula {
    id: number;
    alumnoId: number;
    asignaturaId: number;
    nota: number;
}

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {
  private url = "http://localhost:8081/matricula";

  constructor(private http: HttpClient) { };

  getMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.url);
  }

  getMatricula(id: number): Observable<Matricula> {
    return this.http.get<Matricula>(`${this.url}/${id}`)
  }
}
