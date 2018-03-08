

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno.routing.module';
import { AlunoService } from './aluno.service';

import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule
  ],
  declarations: [AlunoFormComponent, 
                 AlunoComponent, 
                 AlunoDetalheComponent],
  providers: [AlunoService]
})
export class AlunoModule { }
