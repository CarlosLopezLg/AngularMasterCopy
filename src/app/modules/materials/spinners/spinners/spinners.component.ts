import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.css']
})
export class SpinnersComponent implements OnInit {

  importString:string = `import {MatButtonModule} from '@angular/material/button';`;
  basicHtml:string = `<mat-spinner></mat-spinner>`;
  determinatedHtml:string = `<mat-spinner mode="determinate" value="80"></mat-spinner>`;
  optionsHtml:string = `<mat-spinner color="warn" diameter="250" strokeWidth="2"></mat-spinner>`;

  // Parameteres Table
  dataSource: any[] = [
    {name: 'color', type: 'ThemePalette', desc: 'Cambia el color del Spinner, en base a la paleta de colores de Angular Materials.'},
    {name: 'diameter', type: 'number', desc: 'Cambia el diámetro del spinner.'},
    {name: 'mode', type: 'string', desc: 'Determina el modo del spinner. Valores posibles: ["indeterminated" (default),"determinated"]'},
    {name: 'strokeWidth', type: 'number', desc: 'Determina el ancho de la línea de la circunferencia.'},
    {name: 'value', type: 'number', desc: 'Determina el valor del spinner en modo "determinado". Debe ser un valor del 1 al 100.'},
  ];

  displayedColumns: string[] = ['name', 'type', 'desc'];

  constructor() { }

  ngOnInit(): void {
  }

}
