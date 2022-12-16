import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent implements OnInit {

  enableGuard:boolean = false;

  guardCode = `
  import { Injectable } from '@angular/core';
  import { CanDeactivate, UrlTree } from '@angular/router';
  import { Observable } from 'rxjs';
  
  export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class GuardExampleGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
      component: CanComponentDeactivate) {
      return component.canDeactivate ? component.canDeactivate() : true;
    }
    
  }
  
  `

  moduleCode = `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ExampleRoutingModule } from './guards-routing.module';
  import { Mycomponent } from './mycomponent.component';
  import { GuardExampleGuard } from 'src/app/guards/guard-example.guard';
  
  
  @NgModule({
    declarations: [
      Mycomponent
    ],
    imports: [
      CommonModule,
      ExampleRoutingModule
    ],
    providers: [
      GuardExampleGuard
    ]
  })
  export class ExampleModule { }
  `

  routerCode = `
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { GuardExampleGuard } from 'src/app/guards/guard-example.guard';
  import { Mycomponent } from './mycomponent.component';

  const routes: Routes = [
    { path: '', component: Mycomponent, canDeactivate: [GuardExampleGuard] }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ExampleRoutingModule { }

  `

  componentCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-mycomponent',
    templateUrl: './mycomponent.component.html',
    styleUrls: ['./mycomponent.component.css']
  })

  export class Mycomponent implements OnInit {

    constructor() { }
    
    canDeactivate() {
      return this.enableGuard ? window.confirm('¿Estás seguro que deseas salir?') : true;
    }
  
  }
  `

  constructor() { }

  ngOnInit(): void {
  }

  canDeactivate() {
    return this.enableGuard ? window.confirm('¿Estás seguro que deseas salir?') : true;
  }

}
