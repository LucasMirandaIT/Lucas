import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdsModalComponent } from '../../../commom/dds-modal/dds-modal.component';
import { ImportsAngularMaterialModule } from '../../../shared/imports-angular-material/imports-angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Ibpj Imports
import { ChannelsModule } from '../../channels.module';
import { IbpjAmbientMonitoringComponent } from './ibpj-ambient-monitoring/ibpj-ambient-monitoring.component';

@NgModule({
  imports: [
    CommonModule,
    ImportsAngularMaterialModule,
    ChannelsModule
  ],
  declarations: [
    IbpjAmbientMonitoringComponent,
  ],
  exports: [
    IbpjAmbientMonitoringComponent,
  ],
  entryComponents: [
    DdsModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IbpjAmbientModule { }
