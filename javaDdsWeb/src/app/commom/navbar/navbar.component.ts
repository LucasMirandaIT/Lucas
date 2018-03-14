import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  usuario : any;
  logado : any = false;
  logout : boolean = false;
  menu1 : boolean = false;
  menu2 : boolean = false;

  constructor(private router : Router, private authService : AuthService) { }

  ngAfterViewInit() {
    $('.dropdown-button').dropdown({
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
    });
    $(".btn_sidenav").sideNav({
        closeOnClick: true,
        hover:true
    });
  }

  ChangeRoute(){
    this.logout = true;
    this.authService.getLogout();
    this.usuario = "";
  }
}

