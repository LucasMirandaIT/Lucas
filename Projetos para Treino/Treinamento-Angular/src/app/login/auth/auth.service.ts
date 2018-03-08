import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router/';

@Injectable()
export class AuthService {


  usuarioEstaLogado: boolean;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarRotaEmitter = new EventEmitter<string>(); 

  constructor(private route: Router) { }

  fazerLogin(login: string, senha: string, rota: string='') {
    if (login == 'abc' && senha == 'abc') {
      this.usuarioEstaLogado = true;

      this.mostrarMenuEmitter.emit (true);

      this.route.navigate([rota]);
      return true;
    } else {
      this.usuarioEstaLogado = false;

      this.mostrarMenuEmitter.emit (false);

      return false;
    }
  }

  getUsuarioEstaLogado() {
    return this.usuarioEstaLogado;
  }

  newRota(route) {
    this.mostrarRotaEmitter.emit(route);
  }

}