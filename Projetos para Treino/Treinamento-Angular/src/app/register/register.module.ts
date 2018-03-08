import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './register.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  imports: [
    CommonModule,
    //RegisterRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers: [RegisterService]
})
export class RegisterModule { }
