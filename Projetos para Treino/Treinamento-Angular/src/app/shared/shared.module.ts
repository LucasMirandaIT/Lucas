import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { ConsultaCepService } from './services/consulta-cep.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    ],
  declarations: [
    FormDebugComponent,
    FormErrorComponent
  ],
  exports : [
    FormDebugComponent,
    FormErrorComponent,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    FormsModule
  ],
  providers: [ConsultaCepService]
})
export class SharedModule { }
