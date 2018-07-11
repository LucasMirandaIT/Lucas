import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LogoSantanderComponent } from './logo-santander/logo-santander.component';
import { ImportsMaterialModule } from './imports-material/imports-material.module';

@NgModule({
  imports: [
    CommonModule,
    ImportsMaterialModule
  ],
  declarations: [
    HeaderComponent, 
    LogoSantanderComponent,
    LoginComponent
  ],
  exports: [
    HeaderComponent,
    LogoSantanderComponent,
    LoginComponent
  ]
})
export class SharedModule { }
