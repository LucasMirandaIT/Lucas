import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  logged = false;
  loginDetails;

  ngOnInit(){
    this.loginDetails = localStorage.getItem('LoginDetails');
    if(this.loginDetails !== null) {
      this.logged = true;
    } else {
      this.logged = false
    }
  }
}
