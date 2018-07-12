import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';
  logged = false;
  @Input() userLogged;
  loginDetails;

  ngOnInit(){
    this.loginDetails = localStorage.getItem('LoginDetails');
    if(this.userLogged === true) {
      console.log("User Logged: " + this.userLogged);
      this.logged = true;
    } else {
      console.log("User Logged: " + this.userLogged);
      this.logged = false
    }
  }
}
