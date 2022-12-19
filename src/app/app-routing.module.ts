import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  // GENERAL
  { path: 'generales/introduccion', loadChildren: () => import('./modules/general/introduction/introduction.module').then(m => m.IntroductionModule) },
  { path: 'generales/comandos', loadChildren: () => import('./modules/general/commands/commands.module').then(m => m.CommandsModule) },
  { path: 'generales/directivas', loadChildren: () => import('./modules/general/directives/directives.module').then(m => m.DirectivesModule) },
  { path: 'generales/rutas', loadChildren: () => import('./modules/general/routes/routes.module').then(m => m.RoutesModule) },
  { path: 'generales/formularios', loadChildren: () => import('./modules/general/forms/forms.module').then(m => m.FormsModule) },
  { path: 'generales/cliente/http', loadChildren: () => import('./modules/general/http-client/http-client.module').then(m => m.HttpClientModule) },
  // MATERIALS
  { path: 'materials/introduccion', loadChildren: () => import('./modules/materials/materials-install/materials-install.module').then(m => m.MaterialsInstallModule) },
  { path: 'materials/botones', loadChildren: () => import('./modules/materials/buttons/buttons.module').then(m => m.ButtonsModule) },
  { path: 'materials/spinners', loadChildren: () => import('./modules/materials/spinners/spinners.module').then(m => m.SpinnersModule) },
  { path: 'materials/progress/bar', loadChildren: () => import('./modules/materials/progress-bar/progress-bar.module').then(m => m.ProgressBarModule) },
  { path: 'materials/slider', loadChildren: () => import('./modules/materials/slider/slider.module').then(m => m.SliderModule) },
  { path: 'materials/ripples', loadChildren: () => import('./modules/materials/ripples/ripples.module').then(m => m.RipplesModule) },
  { path: 'materials/checkbox', loadChildren: () => import('./modules/materials/check-box/check-box.module').then(m => m.CheckBoxModule) },
  // INTERMEDIO
  { path: 'intermedio/guards', loadChildren: () => import('./modules/intermediate/guards/guards.module').then(m => m.GuardsModule) },
  { path: 'intermedio/lazy/load', loadChildren: () => import('./modules/intermediate/lazy-load/lazy-load.module').then(m => m.LazyLoadModule) },
  { path: 'intermedio/event/emitter', loadChildren: () => import('./modules/intermediate/event-emitter/event-emitter.module').then(m => m.EventEmitterModule) },
  { path: 'intermedio/interceptor', loadChildren: () => import('./modules/intermediate/interceptor/interceptor.module').then(m => m.InterceptorModule) },
  // EXTRAS
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
