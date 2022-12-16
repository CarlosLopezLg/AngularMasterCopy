import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
