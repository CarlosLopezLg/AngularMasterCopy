import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

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
    path: 'generales/comandos', 
    loadChildren: () => import('./modules/general/commands/commands.module').then(m => m.CommandsModule) 
  },
  { 
    path: 'generales/directivas', 
    loadChildren: () => import('./modules/general/directives/directives.module').then(m => m.DirectivesModule) 
  },
  {
    path: "**", 
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
