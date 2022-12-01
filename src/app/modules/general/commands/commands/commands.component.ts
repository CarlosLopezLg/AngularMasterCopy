import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ]

  testingOptions = [1,3];
  moduleOptions = [1];
  routingOptions = [2];

  constructor(private fb: FormBuilder) { }

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

}
