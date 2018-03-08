

import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoComponent } from './aluno.component';

const ALUNO_ROUTES: Routes = [

  {path: 'aluno', component: AlunoComponent, children: [
 //   {path: '', component: AlunoComponent},
    {path: ':idAluno', component: AlunoDetalheComponent},
    {path: ':idAluno/editar', component: AlunoFormComponent}
] }

  
];


@NgModule ({
  imports: [RouterModule.forChild(ALUNO_ROUTES)],
  exports: [RouterModule]
})
export class AlunoRoutingModule{}
