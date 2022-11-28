import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  generatorForm!: FormGroup;
  generatedCommand: string = 'Comando generado';
  isGenerated: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generatorForm = this.fb.group({
      name: [''],
      lastname: ['']
    });
  }

  generateCommand():void {
    this.isGenerated = true;
  }

}
