import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdsHeaderToolbarActionComponent } from './header/dds-header-toolbar-action.component';
import { DdsLoadingModule } from '../dds-loading/dds-loading.module';
import { DdsPageComponent } from './dds-page.component';
import { DdsPageBodyComponent } from './body/dds-page-body.component';
import { DdsPageHeaderComponent } from './header/dds-page-header.component';

const COMPONENTS = [
    DdsPageComponent,
    DdsPageBodyComponent,
    DdsPageHeaderComponent,
    DdsHeaderToolbarActionComponent
];

@NgModule({
    imports: [CommonModule, DdsLoadingModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DdsPageModule {}

export * from './dds-page.component';
export * from './header/dds-header-toolbar-action.component';
