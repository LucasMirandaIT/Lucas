import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdsModalComponent } from '../../../commom/dds-modal/dds-modal.component';
import { ImportsAngularMaterialModule } from '../../../shared/imports-angular-material/imports-angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Ibpf Imports
import { ChannelsModule } from '../../channels.module';
import { IbpfAmbientMonitoringComponent } from './ibpf-ambient-monitoring/ibpf-ambient-monitoring.component';

@NgModule({
  imports: [
    CommonModule,
    ImportsAngularMaterialModule,
    ChannelsModule
  ],
  declarations: [
    IbpfAmbientMonitoringComponent,
  ],
  exports: [
    IbpfAmbientMonitoringComponent,
  ],
  entryComponents: [
    DdsModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IbpfAmbientModule { }
