import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Profesor } from '../../models/profesor';
import { ProfesorService } from '../../services/profesor';

@Component({
  selector: 'app-profesor-list',
  imports: [RouterLink],
  templateUrl: './profesor-list.html',
  styleUrl: './profesor-list.css',
})
export class ProfesorList implements OnInit{

  //Declaramos array de profes
  profesores: Profesor[] = [];

  //Injectamos con el constructor

  constructor(private service: ProfesorService){ }

  ngOnInit() {
    //Traemos lo datos con el subscribe
    this.service.getProfesores().subscribe({
      next: (data) => {
        this.profesores = data
      },
      error: (err) => {
        console.error("Error al cargar la lista de profesores", err);
      }
    })
  }

}