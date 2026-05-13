import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor';


@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private url = "http://localhost:8081/profesor";

  constructor(
    private http: HttpClient
  ) { };

  //Creamos la funcion para el  endpoint de profesor por ID
  getProfesor(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(`${this.url}/${id}`);
  }

  //Endpoint de profesores enteros
  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.url);
  }
}