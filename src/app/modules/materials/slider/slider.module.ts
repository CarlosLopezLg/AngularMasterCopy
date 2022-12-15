import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider/slider.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    SliderRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class SliderModule { }
