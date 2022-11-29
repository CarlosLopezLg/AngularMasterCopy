import { Component, ViewChild } from '@angular/core';
import { EmitterService } from './shared/services/emitter-service.service';
import { IconService } from './shared/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('drawer') sidebar: any;


  constructor (
    private iconSvc: IconService,
    private emitterService: EmitterService
    ) { }

  ngOnInit(): void {
    this.emitterService.toggleSidebar.subscribe(() => {
      console.log("app component")
      this.sidebar.toggle();
    });
  }

  onActivate():void {
    document.body.scrollTop = 0;
  }
}
