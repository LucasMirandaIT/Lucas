import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/scss/header.scss']
})
export class HeaderComponent implements OnInit {

  logoColor: string;
  navStatus : boolean;

  constructor(private router : Router) { }

  ngOnInit() {
    this.logoColor = "#f00"; 
    this.navStatus = false;
  }

  toggleNav(status = null){
    if (status === "F") {
      this.navStatus = false; return;
    }
    this.navStatus = !this.navStatus;
  }
}
