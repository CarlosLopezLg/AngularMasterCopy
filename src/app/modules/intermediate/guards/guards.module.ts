import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsRoutingModule } from './guards-routing.module';
import { GuardsComponent } from './guards/guards.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GuardExampleGuard } from 'src/app/guards/guard-example.guard';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GuardsComponent
  ],
  imports: [
    CommonModule,
    GuardsRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ],
  providers: [
    GuardExampleGuard
  ]
})
export class GuardsModule { }
