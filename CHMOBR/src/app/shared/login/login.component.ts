import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() userLogged: EventEmitter<any> = new EventEmitter();

  _voltar;

  constructor(private authService: AuthService, public router: Router, public authGuard: AuthGuard) { }
  login;
  senha;
  ngOnInit() {
  }

  logar (login, senha) {
    this.authService.fazerLogin(login, senha);
  }
}
