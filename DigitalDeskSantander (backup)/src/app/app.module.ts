import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';

import { AppRoutingModule } from './app-routing.module';
import { CommomModule } from './commom/commom.module';
import { AuthService } from './services/auth/auth.service';
import { GetDatabaseService } from './services/get-database/get-database.service';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { PostDatabaseService } from './services/post-database/post-database.service';
import { PublicSelectionModule } from './public-selection/public-selection.module';
import { HomeModule } from './home/home.module';
import { BreadcrumbComponent } from './commom/breadcrumb/breadcrumb.component';
import { ModulesMonitoringModule } from './modules-monitoring/modules-monitoring.module';
import { EventEmitterService } from './services/event-emitter/event-emitter.service';

import { JsonConfigModule } from 'angl-spawebbgrl/json-config-module/config.module';
import { HubConnectorModule } from 'angl-spawebbgrl/spa-http-module/hub-connector.module';
import { ErrorHandlingModule } from 'angl-spawebbgrl/error-handling-module';
import { LogModule } from 'angl-spawebbgrl/log';
import { AppComponent } from './app.component';

import { MaterializeModule } from "angular2-materialize";

import { GuardsModule } from 'angl-spawebbgrl/guards-module/guards.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorHandlingModule,
    JsonConfigModule.forRoot(['assets/url.config.json']),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/translate', '.json'),
      deps: [Http]
    }),
    HubConnectorModule.forRoot('url_hub_sso'),
    LogModule.forRoot('url_log'),
    CommomModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PublicSelectionModule,
    ModulesMonitoringModule,
    MaterializeModule,
    GuardsModule.forRoot('system_code', 'url_mbs_roles',
    'url_mbs_menu_items', 'route_forbbiden')
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthService,
    GetDatabaseService,
    PostDatabaseService,
    EventEmitterService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
