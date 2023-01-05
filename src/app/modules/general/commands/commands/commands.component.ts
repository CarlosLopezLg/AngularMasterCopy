import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  generatorForm!: FormGroup;
  generatedCommand: string = 'Comando generado';
  isGenerated: boolean = false;
  optSelected: number = 0;
  options:Array<any> = [
    {
      name: "componente",
      commandName: "component",
      value: 1
    },
    {
      name: "módulo",
      commandName: "module",
      value: 2
    },
    {
      name: "servicio",
      commandName: "service",
      value: 3
    },
    {
      name: "guard",
      commandName: "guard",
      value: 4
    },
    {
      name: "clase",
      commandName: "class",
      value: 5
    },
    {
      name: "interfaz",
      commandName: "interface",
      value: 6
    },
    {
      name: "interceptor",
      commandName: "interceptor",
      value: 7
    },
    {
      name: "pipe",
      commandName: "pipe",
      value: 8
    }
  ]

  testingOptions = [1,3,4,5,7,8];
  moduleOptions = [1,2,4,8];
  routingOptions = [2];


  constructor(private meta: Meta, private title: Title, private fb: FormBuilder, private _snackBar: MatSnackBar) { 
    this.title.setTitle('Comandos principales de Angular');
    this.meta.updateTag({ name: 'title', content: 'Comandos principales de Angular' });
    this.meta.updateTag({ name: 'description', content: 'Conoce los Comandos principales de Angular, su sintáxis y el generador de comandos implementado.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, tutorial, guia, pasos, introducción, conceptos, generales, angular materials, materials, intermedio, comandos, npm, node, ng, new, serve, generate, guard, component, pipe, module, módulo, componente, clase, class, interface, interfaz, interceptor' });
  }

  ngOnInit(): void {
    this.generatorForm = this.fb.group({
      option: ['', [Validators.required]],
      name: ['', [Validators.required]],
      componentModule: [''],
      checkTesting: [''],
      checkModule: [''],
      checkRouting: ['']
    });
  }

  generateCommand():void {
    const option = this.generatorForm.get('option')?.value;
    const name = this.generatorForm.get('name')?.value;
    const checkTesting = this.generatorForm.get('checkTesting')?.value;
    const componentModule = this.generatorForm.get('componentModule')?.value;
    const checkModule = this.generatorForm.get('checkModule')?.value;
    const checkRouting = this.generatorForm.get('checkRouting')?.value;
    this.generatedCommand = 'ng generate ' + option.commandName + ' ' + name;
    if (checkTesting && this.testingOptions.includes(option.value))
      this.generatedCommand = this.generatedCommand + ' --skip-tests';
    if (checkModule && this.moduleOptions.includes(option.value))
      this.generatedCommand = this.generatedCommand + ' --module ' + componentModule;
    if (checkRouting && this.routingOptions.includes(option.value))
      this.generatedCommand = this.generatedCommand + ' --routing';
    this.isGenerated = true;
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

}
