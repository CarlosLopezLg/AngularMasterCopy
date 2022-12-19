import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RipplesRoutingModule } from './ripples-routing.module';
import { RipplesComponent } from './ripples/ripples.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RipplesComponent
  ],
  imports: [
    CommonModule,
    RipplesRoutingModule,
    SharedModule,
    MaterialsModule
  ]
})
export class RipplesModule { }
