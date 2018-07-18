import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { UserAuth } from './commom/dds-login/auth/userAuth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  userAuth: UserAuth = new UserAuth();

  constructor (public router: Router, public authGuardService: AuthGuardService) {}

  ngOnInit() {
    this.authGuardService.userLogado.subscribe(
      retorno => {
        this.userAuth = retorno;
      }
    );
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
  }

  logout() {
    this.authGuardService.setLogout();
    this.router.navigate(['/login']);
  }

}
