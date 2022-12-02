import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials-install',
  templateUrl: './materials-install.component.html',
  styleUrls: ['./materials-install.component.css']
})
export class MaterialsInstallComponent implements OnInit {

  // Botones
  buttonContent:string = '(｡◕‿◕｡)';
  // Radio buttons
  radioOptions: string[] = ['Primera opción', 'Segunda opción', 'Tercera opción', 'Carlos'];

  constructor() { }

  ngOnInit(): void {
  }

}
