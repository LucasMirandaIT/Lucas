import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogged = false;
  constructor(public http: Http, public router: Router) { }

  isLogged() {
    return this.userLogged;
  }

  fazerLogin(login, password) {
    let temp = {}
    temp = {
      username: login,
      password: password
    }
    this.http.post("https://rm.paas.santanderbr.corp/ldappasswordchanger/api/auth/", temp).toPromise().then(retorno => {
      this.userLogged = true;
      localStorage.setItem('LoginDetails', JSON.stringify(temp));
      this.router.navigate(['/']);
    }).catch(error => {
      this.userLogged = false;
      this.router.navigate(['/login']);
    });
  }
  // fazerLogin(login, password) {
  //   let temp = {};
  //   temp = {
  //     login : login,
  //     senha: password
  //   }

  //   if(login == 'xb207809' && password == 'Lu#17851') {
  //     this.userLogged = true;
  //     sessionStorage.setItem('LoginDetails', JSON.stringify(temp));
  //     this.router.navigate(['/']);
  //   } else {
  //     this.userLogged = false;
  //     this.router.navigate(['/login']);
  //   }
  // }
}
