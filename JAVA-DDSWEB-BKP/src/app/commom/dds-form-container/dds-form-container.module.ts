import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdsFormContainerComponent } from './dds-form-container.component';

const COMPONENTS = [
    DdsFormContainerComponent
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: []
})
export class DdsFormContainerModule {}

export * from './dds-form-container.component';
