import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http : Http) { }

  getLogado(login: string, password: string) {
    let temp = {}
    temp = {
      username: login,
      password: password
    }
    return this.http.post("https://rm.paas.santanderbr.corp/ldappasswordchanger/api/auth/", temp)
  }
}
