import { AuthService } from './auth/auth.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms/';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formLogin: FormGroup;
rota:any;

  constructor(private formBuilder : FormBuilder,
              private authService : AuthService) { }

  isSucess(campo){
    return (campo.valid == true && campo.touched == true);
  }
  
  isError(campo){
    return (campo.valid == false &&
            campo.touched == true);
  }
  
    aplicarCssElemento(campo){
      return {'has-error': (this.isError(campo)),
              'has-success' : (this.isSucess(campo))};
    }

    onSubmit() {
      let login = this.formLogin.get ('login').value;
      let senha = this.formLogin.get ('passwd').value;

      console.log (login);
      console.log (senha);
    
      this.authService.fazerLogin(login,senha, this.rota);
    
    }

  ngOnInit() {
    this.authService.mostrarRotaEmitter.subscribe(
      route => {
        this.rota = route;
      }
    )
 
    this.formLogin = this.formBuilder.group({
      login: [null, Validators.required],
      passwd: [null, Validators.required]
    });
  }

}
