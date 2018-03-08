import { SharedModule } from './../shared/shared.module';
import { MeuFormComponent } from './meu-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';

const meuFormRoutes: Routes = [
  {path: 'form', component: MeuFormComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(meuFormRoutes)],
  exports: [RouterModule]
})
export class MeuFormRoutingModule { }
