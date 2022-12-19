import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  importString:string = `import {MatCheckboxModule} from '@angular/material/checkbox';`;
  basicHtml:string = `<mat-checkbox>Seleccionar</mat-checkbox>`;
  //Options
  optionsHtml:string = `
  <mat-checkbox checked="true" color="warn" disableRipple="true">Seleccionar</mat-checkbox> <br>
  <mat-checkbox indeterminate="true" color="primary" labelPosition="before">Seleccionar</mat-checkbox> <br>
    `;

  // Forms
  myform!: FormGroup;

  formsHtml:string = `
  <form [formGroup]="myform">
      <p><mat-checkbox formControlName="one" color="warn">Opcion 1 (Valor predeterminado)</mat-checkbox></p>
      <p><mat-checkbox formControlName="two" color="warn" required="true">Opcion 2 (Requerido)</mat-checkbox></p>
      <p><mat-checkbox formControlName="three" color="warn">Opcion 3 (Opcional)</mat-checkbox></p>
      <br>
      <button mat-raised-button color="primary" [disabled]="myform.invalid"> Enviar </button>
      <br> <br>
      <p> Valor del formulario: {{myform.value | json}}</p>
  </form>
    `;

  formsTs:string = `
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';

  @Component({
    selector: 'app-check-box',
    templateUrl: './check-box.component.html',
    styleUrls: ['./check-box.component.css']
  })
  export class CheckBoxComponent implements OnInit {

    // Forms
    myform!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
      this.myform = this.fb.group({
        one: [true],
        two: [''],
        three: ['']
      });
    }

  }
    `;

  // Events
  eventsHtml:string = `
  <mat-checkbox color="warn" (change)="valueChanged($event.checked)">Se ejecutará cada vez que se seleccione</mat-checkbox> <br>
  <mat-checkbox indeterminate="true" color="warn" (indeterminateChange)="valueChanged(true)">Se ejecutará sólo la primera vez</mat-checkbox>
  `;

  // Parameteres Table
  dataSource: any[] = [
    {name: 'color', type: 'color', desc: 'Cambia el color principal, en base a la paleta de colores de Angular Materials.'},
    {name: 'checked', type: 'boolean', desc: 'Define el valor por defecto a "true"'},
    {name: 'disableRipple', type: 'boolean', desc: 'Deshabilita la animación del Ripple.'},
    {name: 'indeterminate', type: 'boolean', desc: 'Establece el valor por defecto a indeterminado'},
    {name: 'disabled', type: 'boolean', desc: 'Habilita o deshabilita el checkbox.'},
    {name: 'labelPosition', type: 'string', desc: 'Posiciona el texto al inicio o al final. ("before" | "after")'},
    {name: 'required', type: 'boolean', desc: 'Agrega una validación "required" al campo del formulario.'},
    {name: 'change', type: 'EventEmitter', desc: 'Manda a llamar un método al detectar un cambio.'},
    {name: 'indeterminateChange', type: 'EventEmitter', desc: 'Manda a llamar un método al detectar un cambio del valor "ideterminate".'},

  ];

  displayedColumns: string[] = ['name', 'type', 'desc'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      one: [true],
      two: [''],
      three: ['']
    });
  }

  valueChanged(value: Boolean): void {
    alert('Valor cambiado a: ' + value)
  }

}
