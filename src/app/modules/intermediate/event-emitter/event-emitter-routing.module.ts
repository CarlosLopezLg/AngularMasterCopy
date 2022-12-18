import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';

const routes: Routes = [
  { path: '', component: EventEmitterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventEmitterRoutingModule { }
