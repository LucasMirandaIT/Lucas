import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LogoSantanderComponent } from './logo-santander/logo-santander.component';
import { ImportsMaterialModule } from './imports-material/imports-material.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ImportsMaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent, 
    LogoSantanderComponent,
    LoginComponent
  ],
  exports: [
    HeaderComponent,
    LogoSantanderComponent,
    LoginComponent,
  ]
})
export class SharedModule { }
