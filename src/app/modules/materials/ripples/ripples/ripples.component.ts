import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.css']
})
export class RipplesComponent implements OnInit {

  importString:string = `import {MatRippleModule} from '@angular/material/core';`;
  basicHtml:string = `<div class="square" matRipple></div>`;
  basicCss:string = `
  .square{
    background-color: tomato;
    height: 250px;
    width: 100%;
  }
  `;
  //Options
  optionsHtml:string = `
  <div
      class="square"
      matRipple
      [matRippleCentered]="true"
      [matRippleColor]="'#D2543E'"
      [matRippleUnbounded]="true"
      [matRippleRadius]="300"
  ></div>
    `;

  // Parameteres Table
  dataSource: any[] = [
    {name: 'matRippleColor', type: 'color', desc: 'Cambia el color principal.'},
    {name: 'matRippleRadius', type: 'number', desc: 'Cambia el radio del ripple.'},
    {name: 'matRippleCentered', type: 'boolean', desc: 'En caso de tener un valor "true", centra el ripple.'},
    {name: 'matRippleUnbounded', type: 'boolean', desc: 'En caso de tener un valor "true", elimina los límites del ripple.'},
    {name: 'matRippleDisabled', type: 'boolean', desc: 'Habilita o deshabilita el ripple.'},

  ];

  displayedColumns: string[] = ['name', 'type', 'desc'];

  constructor() { }

  ngOnInit(): void {
  }

}
