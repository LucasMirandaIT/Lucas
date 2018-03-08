import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router/';
import { Component, OnInit } from '@angular/core';

import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  idAluno;
  aluno;
  inscricao : Subscription;

  constructor(private activatedRoute : ActivatedRoute,
              private alunoService : AlunoService) { }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe(params => {
      this.idAluno = params.idAluno;

    this.aluno = this.alunoService.getAluno(this.idAluno);
    });
  }

}
