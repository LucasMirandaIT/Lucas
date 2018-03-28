import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DdsFormContainerComponent} from './form-container.component';

let COMPONENTS = [
    DdsFormContainerComponent
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: []
})
export class DdsFormContainerModule {}

export * from './form-container.component';
