import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CommomModule } from './commom/commom.module';
import { AuthService } from './services/auth/auth.service';
import { GetDatabaseService } from './services/get-database/get-database.service';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { PostDatabaseService } from './services/post-database/post-database.service';
import { PublicSelectionModule } from './public-selection/public-selection.module';
import { HomeModule } from './home/home.module';
import { BreadcrumbComponent } from './commom/breadcrumb/breadcrumb.component';
import { ModulesMonitoringModule } from './modules-monitoring/modules-monitoring.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommomModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PublicSelectionModule,
    ModulesMonitoringModule,
    MaterializeModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    GetDatabaseService,
    PostDatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
