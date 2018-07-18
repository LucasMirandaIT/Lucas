// angular imports
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// components
import { DdsCardSlideComponent } from '../commom/dds-card-slide/dds-card-slide.component';
import { DdsUploadFileComponent } from '../commom/dds-upload-file/dds-upload-file.component';
import { DdsModalComponent } from '../commom/dds-modal/dds-modal.component';

import { DdsStepNavigationComponent } from '../commom/dds-step-navigation/dds-step-navigation.component';
import { DdsStepItemComponent } from '../commom/dds-step-navigation/dds-step-item.component';

import { ClientsComponent } from './commom/clients/clients.component';
import { GroupsComponent } from './commom/groups/groups.component';
import { InfoGroupComponent } from './commom/info-group/info-group.component';
import { ClientsIncludeComponent } from './commom/clients-include/clients-include.component';
import { DdsCardRotateComponent } from '../commom/dds-card-rotate/dds-card-rotate.component';

// modules
import { MatCardModule, MatSortModule, MatDialogModule } from '@angular/material';
import { ImportsAngularMaterialModule } from '../shared/imports-angular-material/imports-angular-material.module';
import { DdsErrorMessagesModule } from '../commom/dds-errors-components/dds-error-messages.module';
import { DdsValidationDirectivesModule } from '../commom/validation/dds-validation-directives.module';
import { DdsNotificationModule } from '../commom/dds-notification/dds-notification.module';

// services
import { ModuloService } from '../services/modulo-service/modulo.service';
import { TesteService } from '../services/teste/teste.service';
import { RestClientService } from '../shared/base-service/rest-client.service';
import { CustomHttpEventObserverService } from '../shared/base-service/custom-http-event-observer.service';
import { PropertyProviderService } from '../shared/base-service/property-provider.service';
import { BaseParamsService } from '../shared/base-service/base-params.service';
import { DdsMaskDirective } from '../shared/mask/dds-mask.directive';
import { IbpfAmbientMonitoringConfirmModalComponent } from './ibpf/ambients/ibpf-ambient-monitoring/ibpf-ambient-monitoring-confirm-modal/ibpf-ambient-monitoring-confirm-modal.component';
import { IbpjAmbientMonitoringConfirmModalComponent } from './ibpj/ambients/ibpj-ambient-monitoring/ibpj-ambient-monitoring-confirm-modal/ibpj-ambient-monitoring-confirm-modal.component';
import { DdsCardRotateModalComponent } from '../commom/dds-card-rotate/dds-card-rotate-modal/dds-card-rotate-modal.component';
import { MaskUtils } from '../shared/utils/maskUtils';
import { AmbientMonitoringLogComponent } from './commom/ambient-monitoring-log/ambient-monitoring-log.component';
import { InfoModulesComponent } from './commom/info-modules/info-modules.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSortModule,
    MatDialogModule,

    ImportsAngularMaterialModule,
    DdsErrorMessagesModule,
    DdsValidationDirectivesModule,
    DdsNotificationModule
  ],
  declarations: [
    DdsUploadFileComponent,
    DdsCardSlideComponent,
    DdsModalComponent,
    ClientsIncludeComponent,
    DdsStepNavigationComponent,
    DdsStepItemComponent,
    DdsMaskDirective,
    ClientsComponent,
    GroupsComponent,
    InfoGroupComponent,
    DdsCardRotateComponent,
    IbpfAmbientMonitoringConfirmModalComponent,
    IbpjAmbientMonitoringConfirmModalComponent,
    DdsCardRotateModalComponent,
    AmbientMonitoringLogComponent,
    InfoModulesComponent
  ],
  exports: [
    DdsUploadFileComponent,
    DdsCardSlideComponent,
    DdsModalComponent,
    ClientsIncludeComponent,
    DdsStepItemComponent,
    DdsMaskDirective,
    ClientsComponent,
    GroupsComponent,
    InfoGroupComponent,
    DdsCardRotateComponent,
    IbpfAmbientMonitoringConfirmModalComponent,
    IbpjAmbientMonitoringConfirmModalComponent,
    DdsCardRotateModalComponent,
    AmbientMonitoringLogComponent,
    InfoModulesComponent
  ],
  entryComponents: [
    DdsModalComponent,
    ClientsIncludeComponent,
    IbpfAmbientMonitoringConfirmModalComponent,
    IbpjAmbientMonitoringConfirmModalComponent,
    DdsCardRotateModalComponent,
  ],
  providers: [
    ModuloService,
    TesteService,
    RestClientService,
    CustomHttpEventObserverService,
    PropertyProviderService,
    BaseParamsService,
    DdsCardRotateComponent,
    MaskUtils
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChannelsModule { }
