import { AuthGuardService } from './guards/auth-guard.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImpostoComponent} from './imposto/imposto.component';
import {ImcComponent} from './imc/imc.component';
import {MeuFormComponent} from './meu-form/meu-form.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
// import {ClienteComponent} from './cliente/cliente.component';
// import { ClienteDetalheComponent } from './cliente/cliente-detalhe/cliente-detalhe.component';
// import { ClienteNaoEncontradoComponent } from './cliente/cliente-nao-encontrado/cliente-nao-encontrado.component';


const APP_ROUTES: Routes = [
  {path: '', component: ImpostoComponent, canActivate: [AuthGuardService]
},
  // {path: 'form', component: MeuFormComponent},
  {path: 'imc', component: ImcComponent, canActivate: [AuthGuardService]},
  // {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', loadChildren: 'app/aluno/aluno.module#AlunoModule', canActivate: [AuthGuardService]}
  // {path: 'clientes', component: ClienteComponent},
  // {path: 'cliente/:idCliente', component: ClienteDetalheComponent},
  // {path: 'cliente-nao-encontrado/:idCliente', component: ClienteNaoEncontradoComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
