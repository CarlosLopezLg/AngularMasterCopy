import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
