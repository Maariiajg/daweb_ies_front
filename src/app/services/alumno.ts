import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';


@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private url = "http://localhost:8081/alumno"; // Url del backend

  constructor(
    private http: HttpClient
  ) { };

  //Creamos las funciones de los endpoints que queremos consumir del backend ( Con observable )
  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url);
  }

  //Para el url con el id lo hacemos asi para que no de error con las comillas ( Con observable )
  getAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.url}/${id}`)
  }

}