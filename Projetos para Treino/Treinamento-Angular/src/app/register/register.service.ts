import { Injectable, Output } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpRequest } from 'selenium-webdriver/http';

@Injectable()
export class RegisterService {

  constructor(private http : Http) { }

  searchCEP(cep) {
    var url= 'https://viacep.com.br/ws/' + cep + '/json';
      return this.http.get(url).map(response =>response.json());
  }
}