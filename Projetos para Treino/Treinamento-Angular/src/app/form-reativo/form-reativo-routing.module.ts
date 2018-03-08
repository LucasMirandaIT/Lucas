import { AuthGuardService } from './../guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormReativoComponent } from './form-reativo.component';

const formReativoRoutes: Routes = [
  {path: 'form-reativo', component: FormReativoComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(formReativoRoutes)],
  exports: [RouterModule]
})
export class FormReativoRoutingModule { }
