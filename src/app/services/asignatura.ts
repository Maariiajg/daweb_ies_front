import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Asignatura {
    id: number;
    nombre: string;
    horas: number;
}

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
  private url = "http://localhost:8081/asignatura";

  constructor(private http: HttpClient) { };

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.url);
  }

  getAsignatura(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(`${this.url}/${id}`)
  }
}
