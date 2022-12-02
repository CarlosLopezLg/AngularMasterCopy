import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsInstallRoutingModule } from './materials-install-routing.module';
import { MaterialsInstallComponent } from './materials-install/materials-install.component';


@NgModule({
  declarations: [
    MaterialsInstallComponent
  ],
  imports: [
    CommonModule,
    MaterialsInstallRoutingModule
  ]
})
export class MaterialsInstallModule { }
