import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/';
import { AuthService } from './login/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Santander Trainning Application';

numero: number = 20;
numero2: number = 10;
destruirCiclo: boolean = false;

mostrarMenu : boolean = false;

destruirCicloClick() {
// Primeira Forma - If Else
  if (this.destruirCiclo == false && this.numero2 >= 20) {
    this.destruirCiclo = true;
  } else {
    this.destruirCiclo = false;
  }
}
/* //Segunda Forma - Operador Ternário if else
this.destruirCiclo =
this.destruirCiclo == true ? false : true */

/* //Terceira Forma - Operador Not / Inverse
  this.destruirCiclo = !this.destruirCiclo; */



  somaMaisUm(){
    this.numero ++;
    this.numero2 ++;
  }

  clicar(evento) {
  //  alert ('Indra' + evento);
  }

  newRota(route) {
    this.authService.newRota(route);
  }

  constructor(private authService : AuthService){}
  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => {
        this.mostrarMenu = mostrar;
      }
    );
  }
}
