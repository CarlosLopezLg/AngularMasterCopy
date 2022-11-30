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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generatorForm = this.fb.group({
      option: ['', [Validators.required]],
      name: ['', [Validators.required]],
      checkTesting: [''],
      checkModule: [''],
      checkRouting: ['']
    });
  }

  generateCommand():void {
    const option = this.generatorForm.get('option')?.value;
    const name = this.generatorForm.get('name')?.value;
    const checkTesting = this.generatorForm.get('checkTesting')?.value;
    const checkModule = this.generatorForm.get('checkModule')?.value;
    const checkRouting = this.generatorForm.get('checkRouting')?.value;
    this.generatedCommand = 'ng generate ' + option.commandName + ' ' + name;
    if (checkTesting)
      this.generatedCommand = this.generatedCommand + ' --skip-tests';
    if (checkModule)
      this.generatedCommand = this.generatedCommand + ' --module';
    if (checkRouting)
      this.generatedCommand = this.generatedCommand + ' --routing';
    this.isGenerated = true;
  }

}
