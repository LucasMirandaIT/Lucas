import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ColumnOneComponent } from './commom/menu/column-one/column-one.component';
import { ColumnTwoComponent } from './commom/menu/column-two/column-two.component';
import { ColumnThreeComponent } from './commom/menu/column-three/column-three.component';
import { ColumnFourComponent } from './commom/menu/column-four/column-four.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ColumnOneComponent,
    ColumnTwoComponent,
    ColumnThreeComponent,
    ColumnFourComponent,
  ],
  exports: [
    ColumnOneComponent,
    ColumnTwoComponent,
    ColumnThreeComponent,
    ColumnFourComponent,
  ]
})
export class HomeModule { }
