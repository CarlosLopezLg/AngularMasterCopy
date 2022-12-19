import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RipplesComponent } from './ripples/ripples.component';

const routes: Routes = [
  { path: '', component: RipplesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RipplesRoutingModule { }
