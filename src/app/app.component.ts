import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmitterService } from './shared/services/emitter-service.service';
import { IconService } from './shared/services/icon.service';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cookiesAccepted:boolean = false;

  @ViewChild('drawer') sidebar: any;

  constructor (
    private iconSvc: IconService,
    private emitterService: EmitterService,
    private lStorage: LocalStorageService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.emitterService.toggleSidebar.subscribe(() => {
      this.sidebar.toggle();
    });

    this.cookiesAccepted = !!this.lStorage.getItem('cookiesAccepted');
    if (!this.cookiesAccepted) {
      this.emitterService.acceptedCookies.subscribe(() => {
        this.cookiesAccepted = true;
        this.lStorage.setItem('cookiesAccepted', 'aceptado')
      });
    }
  }

  onActivate():void {
    document.body.scrollTop = 0;
    // Navegar a sección específica de html
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) element.scrollIntoView()
    })
  }
}
