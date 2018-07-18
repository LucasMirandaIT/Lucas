import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'dds-login',
  templateUrl: './dds-login.component.html',
  styleUrls: ['./dds-login.component.scss']
})
export class DdsLoginComponent {

  userLogin: any = 'X207809';
  passwordLogin: any = '123';

  constructor(public authService: AuthService) { }

  auth() {
    this.authService.AutenticarLogin(this.userLogin, this.passwordLogin);
  }

}
