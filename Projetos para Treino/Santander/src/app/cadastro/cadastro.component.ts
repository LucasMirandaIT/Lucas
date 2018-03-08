import { Component, OnInit } from '@angular/core';
// import { $ } from 'protractor';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  dados : any = [];
  nome : any;
  cpf : any;
  
  

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('select').material_select();
    });

    $('select').material_select('destroy');

    $(document).ready(function(){
      $('.modal').modal();
    });


    this.dados = [
      {nome : 'nome1', cpf : '444444444444'},
      {nome : 'nome3', cpf : '444444444444'},
      {nome : 'nome4', cpf : '444444444444'},
    ];
  }

}
