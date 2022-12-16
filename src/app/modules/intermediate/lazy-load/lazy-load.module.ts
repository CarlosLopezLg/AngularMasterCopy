import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LazyLoadComponent
  ],
  imports: [
    CommonModule,
    LazyLoadRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class LazyLoadModule { }
