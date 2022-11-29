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
      value: 1
    },
    {
      name: "módulo",
      value: 2
    },
    {
      name: "servicio",
      value: 3
    },
    {
      name: "guard",
      value: 4
    },
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generatorForm = this.fb.group({
      option: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  generateCommand():void {
    this.isGenerated = true;
  }

}
