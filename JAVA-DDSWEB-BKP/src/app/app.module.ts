// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Http } from '@angular/http';
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// spa architecture
import { JsonConfigModule } from 'angl-spawebbgrl/json-config-module/config.module';
import { HubConnectorModule } from 'angl-spawebbgrl/spa-http-module/hub-connector.module';
import { ErrorHandlingModule } from 'angl-spawebbgrl/error-handling-module';
import { LogModule } from 'angl-spawebbgrl/log';
import { GuardsModule } from 'angl-spawebbgrl/guards-module/guards.module';

// components
import { AppComponent } from './app.component';
import { DdsSidenavComponent } from './commom/dds-sidnav/dds-sidenav.component';
import { RootComponent } from './root/root.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { DdsExpansionPanelComponent } from './commom/dds-expansion-panel/dds-expansion-panel.component';

// services
import { PropertyProviderService } from './shared/base-service/property-provider.service';
import { DdsPropertyProviderService } from './shared/base-service/dds-property-provider.service';
import { DdsNotificationService } from './services/notification/dds-notification.service';
import { DdsFormValidationService } from './commom/validation/dds-form-validation.service';
import { GrupoService } from './services/grupo-service/grupo.service';

// modules
import { AppRoutingModule } from './app-routing.module';
import { DdsPageModule } from './commom/dds-page/dds-page.module';
import { DdsFormContainerModule } from './commom/dds-form-container/dds-form-container.module';
import { DdsFormLineModule } from './commom/dds-form-line/dds-form-line.module';
import { DdsFormColumnModule } from './commom/dds-form-column/dds-form-column.module';
import { DdsValidationDirectivesModule } from './commom/validation/dds-validation-directives.module';
import { DdsNotificationModule } from './commom/dds-notification/dds-notification.module';
import { ImportsAngularMaterialModule } from './shared/imports-angular-material/imports-angular-material.module';
import { DdsLoadingModule } from './commom/dds-loading/dds-loading.module';
import { IbpfSelectionModule } from './channels/ibpf/public-selection/ibpf-selection.module';
import { IbpjSelectionModule } from './channels/ibpj/public-selection/ibpj-selection.module';
import { ChannelsModule } from './channels/channels.module';
import { DdsRequestLoadComponent } from './commom/dds-request-load/dds-request-load.component';
import { DdsHomeArticleComponent } from './commom/dds-home-article/dds-home-article.component';
import { IbpfAmbientModule } from './channels/ibpf/ambients/ibpf-ambient.module';
import { IbpjAmbientModule } from './channels/ibpj/ambients/ibpj-ambient.module';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DdsLoginComponent } from './commom/dds-login/dds-login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { AuthService } from './commom/dds-login/auth/auth.service';
import { DdsNoAccessComponent } from './commom/dds-no-access/dds-no-access.component';

@NgModule({
  imports: [
    JsonConfigModule.forRoot(['assets/url.config.json']),
    TranslateModule.forRoot({
      provide: TranslateLoader, useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/translate', '.json'), deps: [Http]
    }),
    HubConnectorModule.forRoot('url_hub_sso'),
    LogModule.forRoot('url_log'),
    GuardsModule.forRoot('system_code', 'url_mbs_roles', 'url_mbs_menu_items', 'route_forbbiden'),
    ErrorHandlingModule,

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ImportsAngularMaterialModule,
    IbpfSelectionModule,
    IbpjSelectionModule,
    ChannelsModule,

    DdsValidationDirectivesModule,
    DdsNotificationModule,
    DdsPageModule,
    DdsFormContainerModule,
    DdsFormLineModule,
    DdsFormColumnModule,
    DdsLoadingModule,

    IbpfAmbientModule,
    IbpjAmbientModule
  ],
  declarations: [
    AppComponent,
    DdsSidenavComponent,
    BreadcrumbComponent,
    RootComponent,
    HomeComponent,
    DdsHomeArticleComponent,
    DdsExpansionPanelComponent,
    DdsRequestLoadComponent,
    DashboardsComponent,
    DdsLoginComponent,
    DdsNoAccessComponent,
    DdsNoAccessComponent,
  ],
  exports: [
    DdsSidenavComponent,
    BreadcrumbComponent,
    RootComponent,
    HomeComponent,
    DdsHomeArticleComponent,
    DdsExpansionPanelComponent,
    DdsRequestLoadComponent,
    DdsLoginComponent,
    DdsNoAccessComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '' },
    { provide: PropertyProviderService, useClass: DdsPropertyProviderService },
    DdsNotificationService,
    DdsFormValidationService,
    GrupoService,
    AuthGuardService,
    AuthService,
    DdsSidenavComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],

})
export class AppModule { }
