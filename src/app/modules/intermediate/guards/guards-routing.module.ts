import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardExampleGuard } from 'src/app/guards/guard-example.guard';
import { GuardsComponent } from './guards/guards.component';

const routes: Routes = [
  { path: '', component: GuardsComponent, canDeactivate: [GuardExampleGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardsRoutingModule { }
