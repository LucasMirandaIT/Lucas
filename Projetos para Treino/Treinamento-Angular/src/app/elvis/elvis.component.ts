import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.css']
})
export class ElvisComponent implements OnInit {

  constructor() {
var testar: boolean = false;
//
// if (testar == true) {
//   altert (true);
// } else {
//   alert (false);
// }
//
// testar == 'a' || testar == 'w' ? return 110 : return 1;


  }

  aluno : any = {
    nome: 'Lucas',
    idade: 19,
    nota: 'null',

    curso: {
      nomeCurso: 'Angular 2',

    professores : {
      nome: 'Fabrizio',
    endereco : {
      rua : 'Av. Guido Caloi, 1002'
        }
      }
    }
  };


    indra: any = {
      país: {
        nomePais: 'Brasil',
        unidade: {
          endereco: {
            rua: 'Guido Caloi',
            tel: '11 xxxx - xxxx',
          setor: {
            qtdeFunc: '100',
            projetos: {
              nomeProj: 'Santander',
              clienteNome: 'Raquel',
              funcionario: {
                0:{
                  nomeFunc: 'F0',
                  idade: 'i0 18',
                }
      }
      }
      }
        }
        }
      }
    };

  ngOnInit() {
  }

}
