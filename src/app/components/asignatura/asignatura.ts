import { Component, OnInit } from '@angular/core';
import { AsignaturaService, Asignatura as AsignaturaModel } from '../../services/asignatura';

@Component({
  selector: 'app-asignatura',
  imports: [],
  templateUrl: './asignatura.html',
  styleUrl: './asignatura.css',
})
export class Asignatura implements OnInit {
  asignaturas: AsignaturaModel[] = [];

  constructor(private service: AsignaturaService) { }

  ngOnInit() {
    this.service.getAsignaturas().subscribe({
      next: (data) => this.asignaturas = data,
      error: (err) => console.error("Error al cargar asignaturas", err)
    });
  }
}
