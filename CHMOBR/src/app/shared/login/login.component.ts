import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/guards/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() userLogged: EventEmitter<any> = new EventEmitter();

  _voltar;

  constructor(private authService: AuthService, public router: Router, public authGuardService: AuthGuardService) { }
  login;
  senha;
  ngOnInit() {
  }

  logar (login, senha) {
    let temp = {};
    temp = { 
      logged: true,
      login, senha
    }
    this.authService.getLogado(login, senha).toPromise().then(retorno => {
    if (retorno.status === 200) {
      localStorage.setItem('LoginDetails', JSON.stringify(temp));
      this.authGuardService.isLogged(true);
    }
    }).catch(error => {

    });
  }
}
