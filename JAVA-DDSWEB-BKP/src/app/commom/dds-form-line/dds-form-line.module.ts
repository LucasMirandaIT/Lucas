import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdsFormLineComponent } from './dds-form-line.component';

const COMPONENTS = [
    DdsFormLineComponent
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: []
})
export class DdsFormLineModule {}

export * from './dds-form-line.component';
