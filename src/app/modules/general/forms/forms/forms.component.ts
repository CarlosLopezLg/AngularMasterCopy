import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  // Formulario 1
  formOne!: FormGroup;
  formOneHtmlContent:string = `
  <form [formGroup]="formOne">
    <mat-form-field appearance="outline">
      <mat-label>Nombre</mat-label>
      <input matInput placeholder="Nombre" formControlName="name"/>
    </mat-form-field>
    <mat-form-field appearance="outline" style="margin-left: 7px;">
      <mat-label>Apellido</mat-label>
      <input matInput placeholder="Apellido" formControlName="lastname"/>
    </mat-form-field>
  </form>
  <p> Valor del formulario: {{formOne.value | json}}</p>
`
  formOneTsContent:string = `
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';

  export class ExampleComponent implements OnInit {
    formOne!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
      this.formOne = this.fb.group({
        name: ['Ejemplo'], //aquí va el valor predeterminado
        lastname: ['']
      });
    }
  }
  `
  // Formulario 2
  formTwo!: FormGroup;
  formTwoHtmlContent:string = `
  <form [formGroup]="formTwo">
    <mat-form-field appearance="outline">
      <mat-label>Nombre</mat-label>
      <input matInput placeholder="Nombre" formControlName="name"/>
      <mat-error> Nombre inválido</mat-error>
    </mat-form-field>
    <mat-form-field appearance="outline" style="margin-left: 7px;">
      <mat-label>Apellido</mat-label>
      <input matInput placeholder="Apellido" formControlName="lastname"/>
      <mat-error> Apellido inválido </mat-error>
    </mat-form-field>
  </form>
  <button mat-raised-button color="primary" [disabled]="formTwo.invalid"> Enviar </button>
`
  formTwoTsContent:string = `
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  export class ExampleComponent implements OnInit {
    formTwo!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
      this.formTwo = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        lastname: ['', [Validators.required]]
      });
    }
  }
  `

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildFormOne()
    this.buildFormTwo()
  }

  private buildFormOne(): void {
    this.formOne = this.fb.group({
      name: ['Ejemplo'], //aquí va el valor predeterminado
      lastname: ['']
    });
  }

  private buildFormTwo(): void {
    this.formTwo = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required]]
    });
  }

}
