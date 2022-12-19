import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckBoxRoutingModule } from './check-box-routing.module';
import { CheckBoxComponent } from './check-box/check-box.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckBoxComponent
  ],
  imports: [
    CommonModule,
    CheckBoxRoutingModule,
    SharedModule,
    MaterialsModule,
    ReactiveFormsModule
  ]
})
export class CheckBoxModule { }
