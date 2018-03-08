import { Router } from '@angular/router/';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {
  idAluno: any;
  inscricao: Subscription;
  aluno : any;


  constructor(private activatedRoute : ActivatedRoute, private alunoService: AlunoService, private router : Router) { }

  editar() {
    this.router.navigate(['/aluno', this.idAluno, 'editar']);
  }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe(params => {
      this.idAluno = params.idAluno;

      this.aluno = this.alunoService.getAluno(this.idAluno);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
