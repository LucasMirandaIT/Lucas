import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './commom/404/404.component';
import { HomeComponent } from './home/home.component';
import { ImportsMaterialModule } from './shared/imports-material/imports-material.module';
import { LoginComponent } from './shared/login/login.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImportsMaterialModule,
    SharedModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
