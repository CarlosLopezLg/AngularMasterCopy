import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.css']
})
export class LazyLoadComponent implements OnInit {

  routerCode = `
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { Mycomponent } from './mycomponent.component';

  const routes: Routes = [
    { path: '', component: Mycomponent }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LazyexampleRoutingModule { }
  `

  approuterCode = `
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: 'example', loadChildren: () => import('./lazyexample/lazyexample.module').then(m => m.LazyexampleModule) }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  `

  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Implementación de Lazy Load (Carga Perezosa) en Angular');
    this.meta.updateTag({ name: 'title', content: 'Implementación de Lazy Load (Carga Perezosa) en Angular' });
    this.meta.updateTag({ name: 'description', content: 'Conoce cómo implementar los Lazy Load (Carga Perezosa) en Angular para aumentar la seguridad de tu página web y denegar permisos de acceso.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, node, javascript, typescript, conejos, programadores, tutorial, guia, pasos, introducción, intermedio, lazy load, carga, perezosa, recursos, rendimiento' });
  }

  ngOnInit(): void {
  }

}
