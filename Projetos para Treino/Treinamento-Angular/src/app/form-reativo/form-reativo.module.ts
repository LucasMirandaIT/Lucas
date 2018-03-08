import { SharedModule } from './../shared/shared.module';
import { FormDebugModule } from './../shared/form-debug/form-debug.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormReativoRoutingModule } from './form-reativo-routing.module';
import { FormReativoComponent } from './form-reativo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormReativoRoutingModule,
    ReactiveFormsModule,
    FormDebugModule,
    SharedModule
    
  ],
  declarations: [FormReativoComponent],
  exports: []
})
export class FormReativoModule { }
