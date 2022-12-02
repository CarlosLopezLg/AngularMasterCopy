import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsInstallComponent } from './materials-install/materials-install.component';

const routes: Routes = [
  { path: '', component: MaterialsInstallComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsInstallRoutingModule { }
