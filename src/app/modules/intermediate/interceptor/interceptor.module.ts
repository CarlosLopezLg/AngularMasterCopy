import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterceptorRoutingModule } from './interceptor-routing.module';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InterceptorComponent
  ],
  imports: [
    CommonModule,
    InterceptorRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class InterceptorModule { }
