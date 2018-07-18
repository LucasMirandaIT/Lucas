import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monkey-play',
  templateUrl: './monkey-play.component.html',
  styleUrls: ['./monkey-play.component.scss']
})
export class MonkeyPlayComponent implements OnInit {
  macacos = [
    {
    nome: 'Chaos Monkey', 
      descricao:'O objetivo dessa frente é criar mecanismos artificiais para simular a queda do Data Center escolhido (Norte ou Sul).',
      dataCenter: ['Sul', 'Norte'],
      projetoOc: [],
      appOc: [],
      attackLevel: ['Leve', 'Moderado', 'Intenso', 'Insano'],
    },
    {
    nome: 'Chaos Gorilla', 
    descricao:'Semelhante ao Chaos Monkey, no Chaos Gorilla iremos simular a queda de apenas uma zona do Data Center escolhido, não ele inteiro.',
    dataCenter: ['Sul', 'Norte'],
    projetoOc: [],
    appOc: [],
    attackLevel: ['Leve', 'Moderado', 'Intenso', 'Insano'],
    },
    {
    nome: 'Shift Monkey', 
    descricao:'Esta frente visa atacar projetos do PaaS, derrubando seus Pods e verificando o comportamento da aplicação',
    dataCenter: ['Sul', 'Norte'],
    projetoOc: [],
    appOc: [],
    attackLevel: ['Leve', 'Moderado', 'Intenso', 'Insano'],
  },
    {
    nome: 'Ape Cage', 
    descricao:'Esta frente trata 4 macacos que trabalham com ataques na Camada de Rede.',
    dataCenter: ['Sul', 'Norte'],
    projetoOc: [],
    appOc: [],
    attackLevel: ['Leve', 'Moderado', 'Intenso', 'Insano'],
  },
    {
    nome: 'Memory Burn Monkey', 
    descricao:'Esta frente visa acessar o Host/Container indicado e criar um processo que ocupe a quantidade indicada de memória, testando assim o comportamento da aplicação',
    dataCenter: ['Sul', 'Norte'],
    projetoOc: [],
    appOc: [],
    attackLevel: ['Leve', 'Moderado', 'Intenso', 'Insano'],
  },
    {
    nome: 'CPU Burn Monkey', 
    descricao:'Esta frente visa acessar o Host/Container indicado e criar um processo que ocupe a quantidade indicada de processamento, testando assim o comportamento da aplicação',
    dataCenter: ['Sul', 'Norte'],
    projetoOc: [],
    appOc: [],
    attackLevel: ['Leve', 'Moderado', 'Intenso', 'Insano'],
  },
    {
    nome: 'Shutdown Monkey', 
    descricao:'Esta frente visa atacar projetos que estão no IaaS e derrubar o Host.',
    dataCenter: ['Sul', 'Norte'],
    projetoOc: [],
    appOc: [],
    attackLevel: ['Leve', 'Moderado', 'Intenso', 'Insano'],
  },
  ]
  nomeMacaco: string;
  descricaoMacaco: string;
  monkeyId;
  constructor() { }
  isLeftVisible = false;
  
  ngOnInit() {
  }
  
  selecionarMacaco(nomeMacaco, descricaoMacaco){
    this.isLeftVisible = !this.isLeftVisible;
    this.nomeMacaco = nomeMacaco;
    window.scrollTo(0, 0);
    this.descricaoMacaco = descricaoMacaco;
    if (this.nomeMacaco === 'Chaos Monkey') {
      this.monkeyId = 1;
    } else if (this.nomeMacaco === 'Chaos Gorilla') {
      this.monkeyId = 2;
    } else if (this.nomeMacaco === 'Shift Monkey') {
      this.monkeyId = 3;
    } else if (this.nomeMacaco === 'Ape Cage') {
      this.monkeyId = 4;
    } else if (this.nomeMacaco === 'Memory Burn Monkey') {
      this.monkeyId = 5;
    } else if (this.nomeMacaco === 'CPU Burn Monkey') {
      this.monkeyId = 6;
    } else if (this.nomeMacaco === 'Shutdown Monkey') {
      this.monkeyId = 7;
    } else {
      this.monkeyId == null;
    }
  }
}
