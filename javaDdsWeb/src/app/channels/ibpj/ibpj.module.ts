// angular imports
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbpjComponent } from './ibpj.component';
import { ImportsAngularMaterialModule } from '../../shared/imports-angular-material/imports-angular-material.module';
import { CommomModule } from '../../channels/commom/commom.module';

@NgModule({
  imports: [
    CommonModule,
    ImportsAngularMaterialModule,
    CommomModule,
  ],
  declarations: [
    IbpjComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class IbpjModule { }
