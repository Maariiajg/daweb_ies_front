import { Component, Input, OnInit } from '@angular/core';
import { ProfesorService } from '../../services/profesor';
import { Profesor } from '../../models/profesor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profesor-details',
  imports: [RouterLink],
  templateUrl: './profesor-details.html',
  styleUrl: './profesor-details.css',
})
export class ProfesorDetails implements OnInit {
  @Input() id!: number;
  profesor: Profesor | undefined;

  constructor(private service: ProfesorService) { }

  ngOnInit() {
    if (this.id) {
      this.service.getProfesor(this.id).subscribe({
        next: (data) => this.profesor = data,
        error: (err) => console.error("Error al cargar detalles del profesor", err)
      });
    }
  }
}
