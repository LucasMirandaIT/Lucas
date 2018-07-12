import { Component, OnInit } from '@angular/core';
import { LogoSantanderComponent } from "../logo-santander/logo-santander.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  :host{
    display: block;
    position: relative;
  }
    `]
})
export class HeaderComponent implements OnInit {
  logoColor: string;
  navStatus : boolean;

  constructor() {
    this.logoColor = "#f00"; 
    this.navStatus = false;
  }

  ngOnInit() {
  }

  toggleNav(status = null){
    if (status === "F") {
      this.navStatus = false; return;
    }
    this.navStatus = !this.navStatus;
  }

}
