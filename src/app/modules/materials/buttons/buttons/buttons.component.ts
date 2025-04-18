import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  importString = `import {MatButtonModule} from '@angular/material/button';`;
  // Button
  buttonHtmlContent = `
  <button mat-button style="background-color: rgb(137, 208, 239);">Enviar</button>
  `;
  // Buttons Group
  buttonsGroupHtmlContent = `
  <section>
            <b>Basic</b>
            <div class="buttons-container">
              <button mat-button>Basic</button>
              <button mat-button color="primary">Primary</button>
              <button mat-button color="accent">Accent</button>
              <button mat-button color="warn">Warn</button>
              <button mat-button disabled>Disabled</button>
              <a mat-button href="#" target="_blank">Link</a>
            </div>
          </section>
          <mat-divider></mat-divider>
          <section>
            <b>Raised</b>
            <div class="buttons-container">
              <button mat-raised-button>Basic</button>
              <button mat-raised-button color="primary">Primary</button>
              <button mat-raised-button color="accent">Accent</button>
              <button mat-raised-button color="warn">Warn</button>
              <button mat-raised-button disabled>Disabled</button>
              <a mat-raised-button href="#" target="_blank">Link</a>
            </div>
          </section>
          <mat-divider></mat-divider>
          <section>
            <b>Stroked</b>
            <div class="buttons-container">
              <button mat-stroked-button>Basic</button>
              <button mat-stroked-button color="primary">Primary</button>
              <button mat-stroked-button color="accent">Accent</button>
              <button mat-stroked-button color="warn">Warn</button>
              <button mat-stroked-button disabled>Disabled</button>
              <a mat-stroked-button href="#" target="_blank">Link</a>
            </div>
          </section>
          <mat-divider></mat-divider>
          <section>
            <b>Flat</b>
            <div class="buttons-container">
              <button mat-flat-button>Basic</button>
              <button mat-flat-button color="primary">Primary</button>
              <button mat-flat-button color="accent">Accent</button>
              <button mat-flat-button color="warn">Warn</button>
              <button mat-flat-button disabled>Disabled</button>
              <a mat-flat-button href="#" target="_blank">Link</a>
            </div>
          </section>`;
  buttonsGroupCssContent = `
  .centerSection section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin: 5px;
  }

  .buttons-container button{
      margin: 5px;
  }
`;

// Parameteres Table
dataSource: any[] = [
  {name: 'color', type: 'ThemePalette', desc: 'Cambia el color principal, en base a la paleta de colores de Angular Materials.'},
  {name: 'disableRipple', type: 'boolean', desc: 'Desactiva la animación Ripple al ser presionado.'},
  {name: 'disabled', type: 'boolean', desc: 'Habilita o deshabilita el botón.'},
];

displayedColumns: string[] = ['name', 'type', 'desc'];

constructor(private meta: Meta, private title: Title) { 
  this.title.setTitle('Botones de Angular Materials');
  this.meta.updateTag({ name: 'title', content: 'Botones de Angular Materials' });
  this.meta.updateTag({ name: 'description', content: 'Conoce cómo implementar los botones en Angular Materials.' });
  this.meta.updateTag({ name: 'keywords', content: 'angular, node, javascript, typescript, conejos, programadores, tutorial, guia, pasos, introducción, angular materials, materials, botones, buttons, api, parameters, parámetros, colores, forms, color, disabled, disableRipple' });
}

  ngOnInit(): void {
  }

}
