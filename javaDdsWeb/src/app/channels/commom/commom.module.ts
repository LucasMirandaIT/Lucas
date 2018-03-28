// angular imports
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

// components
import { DdsCardSlildeComponent } from '../../commom/dds-card-slide/dds-card-slide.component';
import { DdsUploadFileComponent } from '../../commom/dds-upload-file/dds-upload-file.component';
import { PublicSelectionComponent } from './public-selection/public-selection.component';
import { GroupTableComponent } from './public-selection/group-table/group-table.component';

// modules
import { ImportsAngularMaterialModule } from '../../shared/imports-angular-material/imports-angular-material.module';
import { DdsErrorMessageModule } from '../../commom/dds-errors-components/index';
import { DdsValidationDirectivesModule } from '../../commom/validation/index';
import { DdsNotificationModule } from '../../commom/dds-notification/index';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,

    ImportsAngularMaterialModule,
    DdsErrorMessageModule,
    DdsValidationDirectivesModule,
    DdsNotificationModule,
  ],
  declarations: [
    PublicSelectionComponent,
    GroupTableComponent,
    DdsUploadFileComponent,
    DdsCardSlildeComponent
  ],
  exports: [
    PublicSelectionComponent,
    GroupTableComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommomModule { }
