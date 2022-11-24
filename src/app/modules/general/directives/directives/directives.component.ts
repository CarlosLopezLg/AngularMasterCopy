import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  toggleExample: boolean = false;
  ngIfHtmlContent:string = `
  <button mat-raised-button class="primary-button" (click)="toggleExample=!toggleExample">
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

  constructor() { }

  ngOnInit(): void {
  }

}
