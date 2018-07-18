import { NgModule } from '@angular/core';
// import {CommonModule} from '@angular/common';
// import { DdsAjaxLoadingComponent, DdsPageLoadingComponent } from '.';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material';
import { DdsAjaxLoadingComponent } from './dds-ajax-loading.component';
import { DdsPageLoadingComponent } from './dds-page-loading.component';

const COMPONENTS = [
    DdsAjaxLoadingComponent,
    DdsPageLoadingComponent,
    DdsPageLoadingComponent
];

@NgModule({
    imports: [CommonModule, MatProgressBarModule ],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: []
})
export class DdsLoadingModule {}


// export * from './dds-ajax-loading.component';
// export * from './dds-page-loading.component';
