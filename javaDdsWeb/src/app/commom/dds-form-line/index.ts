import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DdsFormLineComponent} from './form-line.component';

let COMPONENTS = [
    DdsFormLineComponent
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: []
})
export class DdsFormLineModule {}

export * from './form-line.component';
