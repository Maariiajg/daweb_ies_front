import { Component, computed, inject, input, signal, OnInit, Input } from '@angular/core';
import { AlumnoService } from '../../services/alumno';
import { Alumno } from '../../models/alumno';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alumno-detail',
  imports: [RouterLink],
  templateUrl: './alumno-detail.html',
  styleUrl: './alumno-detail.css',
})
export class AlumnoDetail implements OnInit {


  // Definimos el input que vamos a recibir
  @Input() private id!: number;

  //Guardamos el alumno ( aunque sea nulo al principio )
  alumno: Alumno | undefined;

  //Inyectamos por constructor
  constructor(private service: AlumnoService) { }

  ngOnInit() {
    if (this.id) {
      this.service.getAlumno(this.id).subscribe({
        next: (res) => {
          this.alumno = res;
        },
        error: (err) => {
          console.error("Error al obtener el alumno", err);
        }
      })
    }
  }


}