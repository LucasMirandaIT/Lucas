import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login (login, senha) {
    let temp = {};
    temp = { 
      logged: true,
      login, senha
    }
    this.authService.getLogado(login, senha).toPromise().then(retorno => {
    if (retorno.status === 200) {
      localStorage.setItem('LoginDetails', JSON.stringify(temp));
      this.router.navigate[('/home')];
    }
    }).catch(error => {

    });
  }
}
