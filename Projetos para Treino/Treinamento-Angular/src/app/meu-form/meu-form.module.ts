import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuFormRoutingModule } from './meu-form-routing.module';
import { MeuFormComponent } from './meu-form.component';

@NgModule({
  imports: [
    CommonModule,
    MeuFormRoutingModule,
    SharedModule
  ],
  declarations: [MeuFormComponent]
})
export class MeuFormModule { }
