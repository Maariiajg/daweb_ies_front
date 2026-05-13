import { Component, OnInit } from '@angular/core';
import { MatriculaService, Matricula as MatriculaModel } from '../../services/matricula';

@Component({
  selector: 'app-matricula',
  imports: [],
  templateUrl: './matricula.html',
  styleUrl: './matricula.css',
})
export class Matricula implements OnInit {
  matriculas: MatriculaModel[] = [];

  constructor(private service: MatriculaService) { }

  ngOnInit() {
    this.service.getMatriculas().subscribe({
      next: (data) => this.matriculas = data,
      error: (err) => console.error("Error al cargar matrículas", err)
    });
  }
}
