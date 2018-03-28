import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DdsFormColumnComponent} from './form-column.component';

let COMPONENTS = [
    DdsFormColumnComponent
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: []
})
export class DdsFormColumnModule {}

export * from './form-column.component';
