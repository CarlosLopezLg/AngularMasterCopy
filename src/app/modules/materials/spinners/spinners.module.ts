import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnersRoutingModule } from './spinners-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SpinnersComponent } from './spinners/spinners.component';


@NgModule({
  declarations: [
    SpinnersComponent
  ],
  imports: [
    CommonModule,
    SpinnersRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class SpinnersModule { }
