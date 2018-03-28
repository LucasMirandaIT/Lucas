import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// modules
import { ImportsAngularMaterialModule } from '../shared/imports-angular-material/imports-angular-material.module';

// router
import { HomeRoutingModule } from './home-routing.module';

// components
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    ImportsAngularMaterialModule,
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
