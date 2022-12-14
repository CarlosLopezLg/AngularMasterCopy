import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  importString:string = `import {MatProgressBarModule} from '@angular/material/progress-bar';`;
  basicHtml:string = `<mat-progress-bar></mat-progress-bar>`;
  indeterminatedHtml:string = `<mat-progress-bar mode="indeterminate"></mat-progress-bar>`;
  variantsHtml:string = `
    <p>Buffer:</p>
    <mat-progress-bar mode="buffer"></mat-progress-bar>
    <br />
    <p>Query:</p>
    <mat-progress-bar mode="query" color="warn"></mat-progress-bar>
    <br />
  `;

  bufferVarHtml:string = `
    <p>Buffer:</p>
    <mat-progress-bar mode="buffer"></mat-progress-bar>
    <br />
    <p>Query:</p>
    <mat-progress-bar mode="query" color="warn"></mat-progress-bar>
    <br />
  `;

  bufferVal:number = 70;
  progressVal:number = 40;

  // Parameteres Table
  dataSource: any[] = [
    {name: 'color', type: 'ThemePalette', desc: 'Cambia el color principal, en base a la paleta de colores de Angular Materials.'},
    {name: 'mode', type: 'string', desc: 'Determina el modo de funcionar. Valores posibles: ["determinate" (default), "indeterminate", "buffer", "query"]'},
    {name: 'value', type: 'number', desc: 'Determina el valor de la barra. Debe ser un valor del 1 al 100.'},
    {name: 'bufferValue', type: 'number', desc: 'Determina el valor del buffer de la barra. Debe ser un valor del 1 al 100.'},
  ];

  displayedColumns: string[] = ['name', 'type', 'desc'];

  constructor() { }

  ngOnInit(): void {
  }

}
