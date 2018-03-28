import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DdsPageComponent, DdsPageBodyComponent, DdsPageHeaderComponent} from './dds-page.component';
import {DdsHeaderToolbarActionComponent} from './dds-header-toolbar-action';
// import {DdsLoadingModule} from '../dds-loading/index';

let COMPONENTS = [
    DdsPageComponent,
    DdsPageBodyComponent,
    DdsPageHeaderComponent,
    DdsHeaderToolbarActionComponent
];

@NgModule({
    imports: [CommonModule, 
        //DdsLoadingModule
    ],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DdsPageModule {}

export * from './dds-page.component';
export * from './dds-header-toolbar-action';
