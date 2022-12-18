import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventEmitterRoutingModule } from './event-emitter-routing.module';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EventEmitterComponent
  ],
  imports: [
    CommonModule,
    EventEmitterRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class EventEmitterModule { }
