import { Component, OnInit } from '@angular/core';

import {ImcService} from './imc.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  peso : number;
  altura : number;
  imc : number;
  nome: any;
  sobrenome: any;
  nomeCompleto: any;
  situacaoAtual: any;

  constructor(private imcService : ImcService) {

  }

  calcularImc () {
    this.imc = this.imcService.calcularImc (this.peso, this.altura);
    this.calcularSituacaoAtual();
    alert ("Olá, " + this.nome + " " + this.sobrenome + "\nSua altura é de: " + this.altura + "cm \n" + "Seu peso é de: " + this.peso + "Kg \nSeu IMC é de: " + this.imc.toFixed(2) + "\nPortanto, você está " + this.situacaoAtual)
  }

calcularSituacaoAtual() {
  if (this.imc <= 18.5) {
    this.situacaoAtual = 'abaixo do peso';
  } else if (this.imc >= 18.6 && this.imc <= 24.9) {
    this.situacaoAtual = 'no Peso Ideal (Parabéns!!!)';
  } else if (this.imc >= 25 && this.imc <= 29.9) {
    this.situacaoAtual = 'Levemente Acima do Peso';
  } else if (this.imc >= 30 && this.imc <= 34.9) {
    this.situacaoAtual = 'com Obesidade grau I';
  } else if (this.imc >= 35 && this.imc <= 39.9) {
    this.situacaoAtual = 'com Obesidade II (Severa)';
  } else {
    this.situacaoAtual = 'com Obesidade III (Mórbida)';
  }
}


ngOnInit() {

}
}
