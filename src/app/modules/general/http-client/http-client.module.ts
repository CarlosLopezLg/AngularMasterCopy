import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientRoutingModule } from './http-client-routing.module';
import { HttpClientComponent } from './http-client/http-client.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HttpClientComponent
  ],
  imports: [
    CommonModule,
    HttpClientRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class HttpClientModule { }
