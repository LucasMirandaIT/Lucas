import { RootComponent } from './root/root.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommomRoutingModule } from './commom-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from '../home/home.module';
import { GeneralLogsComponent } from './general-logs/general-logs.component';

@NgModule({
  imports: [
    CommonModule,
    CommomRoutingModule,
    HomeModule
  ],
  declarations: [
    BreadcrumbComponent,
    NavbarComponent,
    RootComponent,
    GeneralLogsComponent,
  ],
  exports: [
    BreadcrumbComponent,
    NavbarComponent,
    RootComponent,
    CommonModule,
  ]
})
export class CommomModule { }
