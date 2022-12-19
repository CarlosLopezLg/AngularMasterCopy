import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBoxComponent } from './check-box/check-box.component';

const routes: Routes = [
  { path: '', component: CheckBoxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckBoxRoutingModule { }
