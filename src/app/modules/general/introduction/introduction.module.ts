import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { IntroductionComponent } from './introduction/introduction.component';


@NgModule({
  declarations: [
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class IntroductionModule { }
