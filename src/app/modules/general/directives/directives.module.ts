import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives/directives.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class DirectivesModule { }
