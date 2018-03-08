import { AuthGuardService } from './guards/auth-guard.service';
import { AuthService } from './login/auth/auth.service';
import { SharedModule } from './shared/shared.module';
import { AlunoModule } from './aluno/aluno.module';
import { RegisterModule } from './register/register.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
//import { SegundoComponent } from './segundo/segundo.component';
//import { ClienteComponent } from './cliente/cliente.component';
import {ClienteModule} from './cliente/cliente.module';
import { LoginComponent } from './login/login.component';
//import { ImcComponent } from './imc/imc.component';
import {ImcModule} from './imc/imc.module';
import { ImpostoComponent } from './imposto/imposto.component';
import { ImpostoModule } from './imposto/imposto.module';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputOutput2Component } from './input-output2/input-output2.component';
import { AlterarCorDirective } from './diretivas/alterar-cor.directive';
import { DiretivasCorComponent } from './diretivas-cor/diretivas-cor.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ElvisComponent } from './elvis/elvis.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivasClassStyleComponent } from './diretivas-class-style/diretivas-class-style.component';
import { HttpExemploComponent } from './http-exemplo/http-exemplo.component';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { HttpExemploService } from './http-exemplo/http-exemplo.service';
// import { FormDebugComponent } from './shared/form-debug/form-debug.component';
//import { FormErrorComponent } from './form-error/form-error.component';
import {RegisterComponent} from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterService } from './register/register.service';
import { ClienteRoutingModule } from './cliente/cliente.routing.module'; 
import { FormReativoModule } from './form-reativo/form-reativo.module';
import { MeuFormModule } from './meu-form/meu-form.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    //SegundoComponent,
    LoginComponent,
    InputOutputComponent,
    InputOutput2Component,
    AlterarCorDirective,
    DiretivasCorComponent,
    NgContentComponent,
    ElvisComponent,
    CicloComponent,
    DiretivasClassStyleComponent,
    HttpExemploComponent,
    MeuFormComponent,
    // FormDebugComponent,
    //FormErrorComponent,
    //ImpostoComponent,
    //ImcComponent,
    //ClienteComponent,
    //RegisterComponent,
    MenuComponent,
    FooterComponent,
   // ClienteDetalheComponent,
   // ClienteNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClienteModule,
    AlertModule.forRoot(),
    ImcModule,
    ImpostoModule,
    HttpModule,
    AppRoutingModule,
    RegisterModule,
    FormReativoModule,
    MeuFormModule,
    ReactiveFormsModule,
    SharedModule,
    LoginModule
  ],
  providers: [HttpExemploService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
