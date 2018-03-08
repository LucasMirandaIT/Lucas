import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoComponent } from './aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ALUNO_ROUTES: Routes = [
  {path: 'aluno', component: AlunoComponent},
  {path: 'aluno/:idAluno', component: AlunoDetalheComponent},
  {path: 'aluno/:idAluno/editar', component: AlunoFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(ALUNO_ROUTES)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
