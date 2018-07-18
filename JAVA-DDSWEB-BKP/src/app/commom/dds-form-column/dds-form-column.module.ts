import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdsFormColumnComponent } from './dds-form-column.component';

const COMPONENTS = [
    DdsFormColumnComponent
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: []
})
export class DdsFormColumnModule {}

export * from './dds-form-column.component';
