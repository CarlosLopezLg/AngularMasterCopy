import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-code',
  templateUrl: './example-code.component.html',
  styleUrls: ['./example-code.component.css']
})
export class ExampleCodeComponent implements OnInit {

  @Input() htmlContent:string = ``
  @Input() cssContent:string = ``
  @Input() tsContent:string = ``
  @Input() htmlTitle:string = 'example.html'
  @Input() cssTitle:string = 'example.css'
  @Input() tsTitle:string = 'example.ts'


  constructor() { }

  ngOnInit(): void {
  }

}
