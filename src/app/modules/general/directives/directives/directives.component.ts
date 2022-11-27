import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  // NgModel
  linkedValue: string = '';
  ngModelHtmlContent:string = `
  <input placeholder="Escribe cualquier cosa" [(ngModel)]="linkedValue">
  <p> Resultado: {{linkedValue}}</p>
  `
  ngModelTsContent:string = `
  import {Component} from '@angular/core';

  export class ExampleComponent {
    linkedValue: string = '';
  }
  `
  // NgClick
  counter:number = 0;
  ngClickHtmlContent:string = `
  <button (click)="counter = counter + 1">Aumentar contador</button>
  <p>{{counter}}</p>
  `;
  ngClickTsContent:string = `
  import {Component} from '@angular/core';

  export class ExampleComponent {
    counter:number = 0;
  }
  `;
  //NgShow
  toggleNgShow: boolean = false;
  ngShowHtmlContent:string = `
  <button mat-raised-button class="primary-button" (click)="toggleNgShow=!toggleNgShow">
    ¡Presioname!
  </button>
  <p [hidden]="toggleNgShow"> ¡Este contenido aparece y desaparece!</p>
  `;
  ngShowTsContent:string = `
  import {Component} from '@angular/core';

  export class ExampleComponent {
    toggleNgShow: boolean = false;
  }
  `;
  // NgIF
  toggleExample: boolean = false;
  ngIfHtmlContent:string = `
  <button (click)="toggleExample=!toggleExample">
    ¡Presioname!
  </button>
  <p *ngIf="toggleExample"> ¡Este contenido aparece y desaparece!</p>
`
  ngIfTsContent:string = `
  import {Component} from '@angular/core';

  export class ExampleComponent {
    toggleExample: boolean = false;
  }
  `
  // NgFor
  names:Array<String> = ['Mira', 'como', 'se', 'crean', 'en', 'orden'];
  ngForHtmlContent:string = `
  <input #demoInput placeholder="Escribe cualquier cosa">
  <button (click)="names.push(demoInput.value)">Agregar</button>
  <li *ngFor="let name of names; index as i;"> #{{i}} - {{name}}</li>
`
  ngForTsContent:string = `
  import {Component} from '@angular/core';

  export class ExampleComponent {
    names:Array<String> = ['Mira', 'como', 'se', 'crean', 'en', 'orden'];
  }
  `
  // Binding
  currentClass:string = 'red-square';
  bindingHtmlContent:string = `
  <button (click)="currentClass='red-square'">Cuadrado</button>
  <button (click)="currentClass='blue-rectangle'">Rectángulo</button>
  <div [class]="currentClass"></div>
`
  bindingTsContent:string = `
  import {Component} from '@angular/core';

  export class ExampleComponent {
    currentClass:string = 'red-square';
  }
  `
  bindingCssContent:string = `
  .red-square {
    height: 50px;
    width: 50px;
    background-color: red;
  }

  .blue-rectangle {
      height: 50px;
      width: 100px;
      background-color: blue;
  }
  `

  constructor() { }

  ngOnInit(): void {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

}
