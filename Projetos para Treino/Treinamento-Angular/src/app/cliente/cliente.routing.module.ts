import { AuthGuardService } from './../guards/auth-guard.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClienteComponent} from './cliente.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteNaoEncontradoComponent } from './cliente-nao-encontrado/cliente-nao-encontrado.component';

const CLIENTE_ROUTES: Routes = [
    {path: 'clientes', component: ClienteComponent, canActivate: [AuthGuardService], children:[
      {path: 'clientes/:idCliente', component: ClienteDetalheComponent},
      {path: 'cliente-nao-encontrado/:idCliente', component: ClienteNaoEncontradoComponent}
    ]
}
];

@NgModule ({
  imports: [RouterModule.forChild(CLIENTE_ROUTES)],
  exports: [RouterModule]
})
export class ClienteRoutingModule{}
