import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandsRoutingModule } from './commands-routing.module';
import { CommandsComponent } from './commands/commands.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';


@NgModule({
  declarations: [
    CommandsComponent
  ],
  imports: [
    CommonModule,
    CommandsRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class CommandsModule {
  constructor() {
    console.log("debería funcionar 2")
  }
 }
