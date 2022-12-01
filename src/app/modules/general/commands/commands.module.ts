import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandsRoutingModule } from './commands-routing.module';
import { CommandsComponent } from './commands/commands.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommandsComponent
  ],
  imports: [
    CommonModule,
    CommandsRoutingModule,
    SharedModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CommandsModule {
}
