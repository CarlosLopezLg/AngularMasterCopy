import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';


@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class ProgressBarModule { }
