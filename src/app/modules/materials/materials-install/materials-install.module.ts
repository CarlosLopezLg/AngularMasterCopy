import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsInstallRoutingModule } from './materials-install-routing.module';
import { MaterialsInstallComponent } from './materials-install/materials-install.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MaterialsInstallComponent
  ],
  imports: [
    CommonModule,
    MaterialsInstallRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class MaterialsInstallModule { }
