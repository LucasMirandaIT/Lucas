import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ImpostoComponent} from './imposto.component';
import {ImpostoService} from './imposto.service';

import { FormsModule } from '@angular/forms';
//import { NgIf } from '@angular/common';

import {MeuPipePipe} from '../pipes/meu-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ImpostoComponent,MeuPipePipe],
  exports: [ImpostoComponent],
  providers: [ImpostoService]
})
export class ImpostoModule { }
