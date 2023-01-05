import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  codeRoutes = `
  const routes: Routes = [
    {
      path: "",
      redirectTo: "/home",
      pathMatch: "full",
    },
    {
      path: "home", 
      component: HomeComponent
    },
    {
      path: "**", 
      component: PageNotFoundComponent
    }
  ];
  `
  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Implementación de rutas o Routing Module en Angular');
    this.meta.updateTag({ name: 'title', content: 'Implementación de rutas o Routing Module en Angular' });
    this.meta.updateTag({ name: 'description', content: 'Descubre como trabajar con el archivo de rutas en Angular' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, node, javascript, typescript, conejos, programadores, tutorial, guia, pasos, introducción, conceptos, generales, angular materials, materials, intermedio, introducción, rutas, routes, routing, module, child, router, outlet' });
  }

  ngOnInit(): void {
  }

}
