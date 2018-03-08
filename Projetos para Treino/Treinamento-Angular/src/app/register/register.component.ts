import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Http } from '@angular/http';

import {RegisterService} from './register.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  f: any;

  cep: string = '';

  endereco:any [];

  constructor(private register : RegisterService, private http : Http) { }



onSubmit (formulario : NgForm) {
  console.log (formulario);
  this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value) )
  .map(response => response)
  .subscribe( dados => {
    console.log (dados);
    alert (JSON.stringify(dados));
  })
    
    ;
}


  // buscarCEP(cep, f) {

  //   var cep = cep.replace(/\D/g, '');

  //   if (cep !=""){

  //     var validacep = /^[0-9]{8}$/;
  //     if(validacep.test(cep)){
  //       this.register.searchCEP (cep)
  //       .subscribe (response => {
  //         console.log (response)
  //         f.form.patchValue(
  //           {
  //             logradouro: response.logradouro,
  //             bairro: response.bairro,
  //             cep: response.cep,
  //             cidade: response.localidade,
  //             estado: response.uf
  //           }
  //         )
  //       });
  //     } else {
  //       console.log ('Erro');
  //     }

  //     }
  //   }


  isSucess(campo){
    return (campo.valid == true && campo.touched == true);
  }
  
  isError(campo){
    return (campo.valid == false &&
            campo.touched == true);
  }

  aplicarCssElemento(campo){
    return {'has-error': (this.isError(campo)),
            'has-success' : (this.isSucess(campo))};
  }

  ngOnInit() {
  }

}
