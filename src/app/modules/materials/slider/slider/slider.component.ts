import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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
  verticalHtml:string = `
  <mat-slider vertical="true" color="warn">
    <input matSliderThumb>
  </mat-slider>
  `;
  variantsHtml:string = `
  <mat-slider color="primary" invert="true">
    <input matSliderThumb>
  </mat-slider>
  <mat-slider vertical="true" color="warn" invert="true">
    <input matSliderThumb>
  </mat-slider>
  `;

  sliderVarHtml:string = `
  <mat-slider min="10" max="20" value="15" #slider>
    <input matSliderThumb>
  </mat-slider>
  <p>{{slider.value}}</p>
  `;

  stepsHtml:string = `
  <mat-slider 
    color="warn"
    min="0" 
    max="100" 
    value="50" 
    step="10" 
    #sliderwsteps 
    style="width: 100%;">
      <input matSliderThumb>
  </mat-slider>
  <p>{{sliderwsteps.value}}</p>
  `;

  // Parameteres Table
  dataSource: any[] = [
    {name: 'color', type: 'ThemePalette', desc: 'Cambia el color principal, en base a la paleta de colores de Angular Materials.'},
    {name: 'disabled', type: 'boolean', desc: 'Habilita o deshabilita el componente.'},
    {name: 'value', type: 'number', desc: 'Determina el valor del slider.'},
    {name: 'max', type: 'number', desc: 'Determina el valor máximo del slider.'},
    {name: 'min', type: 'number', desc: 'Determina el valor mínimo del slider.'},
    {name: 'step', type: 'number', desc: 'Determina el valor de cambio.'},
    {name: 'invert', type: 'boolean', desc: 'Invierte la dirección del slider.'},
    {name: 'vertical', type: 'boolean', desc: 'Rota el slider de forma vertical.'},
  ];

  displayedColumns: string[] = ['name', 'type', 'desc'];


  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Slider de Angular Materials');
    this.meta.updateTag({ name: 'title', content: 'Slider de Angular Materials' });
    this.meta.updateTag({ name: 'description', content: 'Conoce cómo implementar los Slider en Angular Materials.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, node, javascript, typescript, conejos, programadores, tutorial, guia, pasos, introducción, angular materials, materials, Slider, buttons, api, parameters, parámetros, colores, forms, color, disabled, disableRipple' });
  }

  ngOnInit(): void {
  }

}
