import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  importString:string = `import {MatSliderModule} from '@angular/material/slider';`;
  basicHtml:string = `
  <mat-slider>
    <input matSliderThumb>
  </mat-slider>`;
  rangeHtml:string = `
  <mat-slider min="200" max="500">
    <input value="300" matSliderStartThumb>
    <input value="400" matSliderEndThumb>
  </mat-slider>`;
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
