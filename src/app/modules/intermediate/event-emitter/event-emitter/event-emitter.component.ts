import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {

  serviceCode = `
  import { Injectable, EventEmitter } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class EmitterService {
    public emitMessage: EventEmitter<any> = new EventEmitter();
    constructor() { }
  }
  `

  receptorCode = `
  import { Component } from '@angular/core';
  import { EmitterService } from './shared/services/emitter-service.service';

  @Component({
    selector: 'app-receptor',
    templateUrl: './receptor.component.html',
    styleUrls: ['./receptor.component.css']
  })
  export class ReceptorComponent {

    constructor (
      private emitterService: EmitterService,
      ) { }

    ngOnInit(): void {
      this.emitterService.emitMessage.subscribe(() => {
        alert("Mensaje recibido");
      });
    }
  }
  `

  emisorCode = `
  import { Component } from '@angular/core';
  import { EmitterService } from '../../services/emitter-service.service';

  @Component({
    selector: 'app-emisor',
    templateUrl: './emisor.component.html',
    styleUrls: ['./emisor.component.css']
  })
  export class EmisorComponent {

    constructor(
      private emitterService: EmitterService
    ) { }

    EmitMessage(): void {
      this.emitterService.emitMessage.emit();
    }

  }

  `

  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Implementación de Event Emitter en Angular');
    this.meta.updateTag({ name: 'title', content: 'Implementación de Event Emitter en Angular' });
    this.meta.updateTag({ name: 'description', content: 'Conoce cómo implementar los Event Emitter en Angular para aumentar la seguridad de tu página web y denegar permisos de acceso.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, node, javascript, typescript, conejos, programadores, tutorial, guia, pasos, introducción, intermedio, event, emittter, emitir, evento, comunicar, padre, hijo, componente' });
  }

  ngOnInit(): void {
  }

}
