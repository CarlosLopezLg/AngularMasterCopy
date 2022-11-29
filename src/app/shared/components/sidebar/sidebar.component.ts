import { Component, OnInit } from '@angular/core';
import { ViewInterface } from './IView';
import { VIEWS } from './views'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: ViewInterface[] = VIEWS

  constructor(
  ) { }

  ngOnInit(): void {
  }
  
}
