import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario : any;
  logado : any = false;
  logout : boolean = false;
  menu1 : boolean = false;
  menu2 : boolean = false;

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit() {
    $(document).ready(function(){
      $(".btn_sidenav").sideNav({
        closeOnClick: true,
      });
      $('.collapsible').collapsible();
      $('.dropdown-button').dropdown({
        constrainWidth: false,
        belowOrigin: true,
        alignment: 'right',
      });
      $('.modal').modal();
    });

  }

  ChangeRoute(){
    this.logout = true;
    this.authService.getLogout();
    this.usuario = "";
  }
}

