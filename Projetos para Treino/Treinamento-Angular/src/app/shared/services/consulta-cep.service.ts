import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsultaCepService {

  constructor(
    // private http : Http, private consultaCepService : ConsultaCepService
  ) { }

  // consultarCEP(cep) {

  //   var cep = cep.replace(/\D/g, '');

  //   if (cep !=""){
  //   var validacep = /^[0-9]{8}$/;
    
  //     if(validacep.test(cep)){
  //     return this.http.get ('https://viacep.com.br/ws/' + cep + '/json/').map(response => response.json());
  //     } else {
  //       console.log ('Erro');
  //     }

  //     }
  //   }
}
