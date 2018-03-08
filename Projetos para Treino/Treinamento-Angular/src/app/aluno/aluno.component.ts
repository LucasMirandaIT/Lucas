import { ActivatedRoute } from '@angular/router';
import { AlunoService } from './aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos: any;

  constructor(private alunoService:AlunoService) { }

  ngOnInit() {
    this.alunos= this.alunoService.getAlunos();
  }

}
