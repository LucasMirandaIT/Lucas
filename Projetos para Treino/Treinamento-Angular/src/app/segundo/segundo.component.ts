import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent  {
  nome = '';
  sobrenome = '';
  peso ;
  altura;
  imc:any;
  mensagem: any;

    constructor() {
    }

calcular(){
  this.imc = this.peso/(this.altura*this.altura);
  alert(this.mensagem);
}

}
