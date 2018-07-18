import { Component, OnInit, Input } from '@angular/core';
import { AuthGuard } from './shared/guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';
  logged: boolean = false;
  loginDetails;

  constructor(public authGuard: AuthGuard){}

  ngOnInit(){
    this.authGuard.userLoggedEmitter.subscribe((retorno) => {
      this.logged = retorno;
    });
    this.loginDetails = localStorage.getItem('LoginDetails');
  }
}
