import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './modules/acerca-de/acerca-de.component';
import { BlogComponent } from './modules/blog/blog.component';
import { ContactenosComponent } from './modules/contactenos/contactenos.component';
import { HomeComponent } from './modules/home/home.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { Trabajo1Component } from './modules/trabajo1/trabajo1.component';
import { Trabajo2Component } from './modules/trabajo2/trabajo2.component';
import { Trabajo3Component } from './modules/trabajo3/trabajo3.component';
import { Trabajo4Component } from './modules/trabajo4/trabajo4.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contactenos',
    component: ContactenosComponent
  },
  {
    path: 'acercade',
    component: AcercaDeComponent
  },
  {
    path: 'trabajo1',
    component: Trabajo1Component
  },
  {
    path: 'trabajo2',
    component: Trabajo2Component
  },
  {
    path: 'trabajo3',
    component: Trabajo3Component
  },
  {
    path: 'trabajo4',
    component: Trabajo4Component
  },
  {
    path: '**',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
