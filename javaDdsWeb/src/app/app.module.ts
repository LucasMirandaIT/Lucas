// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Http } from '@angular/http';
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { DdsSidenavComponent } from './commom/dds-sidnav/dds-sidenav.component';
import { RootComponent } from './root/root.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

// modules
import { AppRoutingModule } from './app-routing.module';
import { CommomModule } from './channels/commom/commom.module';
import { HomeModule } from './home/home.module';
import { DdsPageModule } from './commom/dds-page/index';
import { DdsFormContainerModule } from './commom/dds-form-container/index';
import { DdsFormLineModule } from './commom/dds-form-line/index';
import { DdsFormColumnModule } from './commom/dds-form-column/index';
import { DdsValidationDirectivesModule } from './commom/validation/index';
import { DdsNotificationModule } from './commom/dds-notification/index';
import { IbpjModule } from './channels/ibpj/ibpj.module';
import { ImportsAngularMaterialModule } from './shared/imports-angular-material/imports-angular-material.module';

// services
// import { AuthService } from './services/auth/auth.service';
import { GetDatabaseService } from './services/get-database/get-database.service';
// import { AuthGuardService } from './services/guard/auth-guard.service';
import { PostDatabaseService } from './services/post-database/post-database.service';
import { EventEmitterService } from './services/event-emitter/event-emitter.service';
import { DdsNotificationService } from './services/notification/index';
import { DdsFormValidator } from './commom/validation/dds-form-validation.service';

// spa architecture
import { JsonConfigModule } from 'angl-spawebbgrl/json-config-module/config.module';
import { HubConnectorModule } from 'angl-spawebbgrl/spa-http-module/hub-connector.module';
import { ErrorHandlingModule } from 'angl-spawebbgrl/error-handling-module';
import { LogModule } from 'angl-spawebbgrl/log';
import { GuardsModule } from 'angl-spawebbgrl/guards-module/guards.module';

@NgModule({
  imports: [
    JsonConfigModule.forRoot(['assets/url.config.json']),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/translate', '.json'),
      deps: [Http]
    }),
    HubConnectorModule.forRoot('url_hub_sso'),
    LogModule.forRoot('url_log'),
    GuardsModule.forRoot('system_code', 'url_mbs_roles',
    'url_mbs_menu_items', 'route_forbbiden'),
    ErrorHandlingModule,

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommomModule,
    BrowserModule,

    AppRoutingModule,
    ImportsAngularMaterialModule,
    HomeModule,
    IbpjModule,

    DdsValidationDirectivesModule,
    DdsNotificationModule,
    DdsPageModule,
    DdsFormContainerModule,
    DdsFormLineModule,
    DdsFormColumnModule,   

  ],
  declarations: [
    AppComponent,
    DdsSidenavComponent,
    RootComponent,
    BreadcrumbComponent,
  ],
  exports: [
    DdsSidenavComponent,
    RootComponent,
    BreadcrumbComponent,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    // AuthService,
    GetDatabaseService,
    PostDatabaseService,
    EventEmitterService,
    DdsNotificationService,
    DdsFormValidator
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
