import { Component,OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno';
import { Alumno } from '../../models/alumno';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-alumno-list',
  imports: [RouterLink],
  templateUrl: './alumno-list.html',
  styleUrl: './alumno-list.css',
})
export class AlumnoList implements OnInit {

  //Declaramos el array normal
  alumnos: Alumno[] = [];

  //Injectamos el servicio a traves del CONSTRUCTOR ( sin inject )

  constructor(private service: AlumnoService) { };

  ngOnInit() {
    //Usamos el subscribe para traer los datos del Observable
    this.service.getAlumnos().subscribe({
      next: (data) => {
        //Guardamos los datos en el array
        this.alumnos = data
      },
      error: (err) => {
        console.error("Error al cargar la lista", err);
      }
    })
  }

}