import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'generales/comandos', loadChildren: () => import('./modules/general/commands/commands.module').then(m => m.CommandsModule) },
  { path: 'generales/directivas', loadChildren: () => import('./modules/general/directives/directives.module').then(m => m.DirectivesModule) },
  { path: 'generales/rutas', loadChildren: () => import('./modules/general/routes/routes.module').then(m => m.RoutesModule) },
  { path: 'generales/formularios', loadChildren: () => import('./modules/general/forms/forms.module').then(m => m.FormsModule) },
  { path: 'generales/cliente/http', loadChildren: () => import('./modules/general/http-client/http-client.module').then(m => m.HttpClientModule) },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
