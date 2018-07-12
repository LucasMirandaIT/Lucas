import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './commom/404/404.component';
import { FaderComponent } from './shared/ui/fader.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoSantanderComponent } from './shared/logo-santander/logo-santander.component';
import { LoginComponent } from './shared/login/login.component';
import { ImportsMaterialModule } from './shared/imports-material/imports-material.module';
import { MonkeyPlayComponent } from './components/monkey-play/monkey-play.component';
import { MonkeyMonitoringComponent } from './components/monkey-monitoring/monkey-monitoring.component';
import { MonkeyPanelComponent } from './components/monkey-panel/monkey-panel.component';
import { SharedModule } from './shared/shared.module';
import { CardSlideComponent } from './commom/card-slide/card-slide.component';
import { AuthService } from './shared/services/auth.service';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    FaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    MonkeyPlayComponent,
    MonkeyMonitoringComponent,
    MonkeyPanelComponent,
    CardSlideComponent,
  ],
  exports:[
    ImportsMaterialModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ImportsMaterialModule,
    SharedModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
