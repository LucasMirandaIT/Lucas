import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  logado : boolean;

  @Output()
  MostarMenu = new EventEmitter<boolean>();
  @Output()
  EmmiterUser = new EventEmitter<any>();

  constructor(private route : Router) { }

  AutenticarLogin(email: string, password: string){
    // Faria requisição no servidor para verificar se o usuario é valido
    // criptografia usar md5
      if (email == 'abc@abc.com' && password == 'abc'){
        this.route.navigate(['/']);
        this.logado = true;
        this.MostarMenu.emit(true);
        this.EmmiterUser.emit('abc');
        return true;
      } else {
        this.logado = false;
        this.MostarMenu.emit(false);
        return false;
      }
  }

  getLogado(){
    return this.logado;
  }

  getLogout(){
    this.MostarMenu.emit(false);
    this.logado = false;
  }
}
