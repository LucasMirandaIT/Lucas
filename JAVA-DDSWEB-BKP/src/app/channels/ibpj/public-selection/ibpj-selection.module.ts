// angular imports
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// components
import { IbpjSelectionComponent } from './ibpj-selection.component';

// modules
import { ChannelsModule } from '../../channels.module';
import { ImportsAngularMaterialModule } from '../../../shared/imports-angular-material/imports-angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChannelsModule,
    ImportsAngularMaterialModule,
  ],
  declarations: [
    IbpjSelectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IbpjSelectionModule { }
