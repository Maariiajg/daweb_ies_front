import { Routes } from '@angular/router';
import { AlumnoList } from './components/alumno-list/alumno-list';
import { AlumnoDetail } from './components/alumno-detail/alumno-detail';
import { ProfesorList } from './components/profesor-list/profesor-list';
import { ProfesorDetails } from './components/profesor-details/profesor-details';
import { Landingpage } from './components/landingpage/landingpage';
import { Asignatura } from './components/asignatura/asignatura';
import { Matricula } from './components/matricula/matricula';

export const routes: Routes = [
    { path: '', component: Landingpage },
    { path: 'alumno', component: AlumnoList },
    { path: 'alumno/:id', component: AlumnoDetail },
    { path: 'profesores', component: ProfesorList },
    { path: 'profesores/:id', component: ProfesorDetails },
    { path: 'asignatura', component: Asignatura },
    { path: 'matricula', component: Matricula }
];
