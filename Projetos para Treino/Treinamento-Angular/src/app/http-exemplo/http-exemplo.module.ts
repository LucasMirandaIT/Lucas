import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import {HttpExemploComponent} from './http-exemplo.component';
import {HttpExemploService} from './http-exemplo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [HttpExemploComponent],
  exports: [HttpExemploComponent],
  providers: [HttpExemploService]
})
export class HttpExemploModule { }
