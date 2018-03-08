import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModulesMonitoringRoutingModule } from './modules-monitoring-routing.module';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { PreviousTestersComponent } from './previous-testers/previous-testers.component';
import { DashModulesMonitoringComponent } from './dash-modules-monitoring/dash-modules-monitoring.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModulesMonitoringRoutingModule,
  ],
  declarations: [
    DashboardsComponent,
    PreviousTestersComponent,
    DashModulesMonitoringComponent
  ],
  exports:[
    DashboardsComponent,
  ]
})
export class ModulesMonitoringModule { }
