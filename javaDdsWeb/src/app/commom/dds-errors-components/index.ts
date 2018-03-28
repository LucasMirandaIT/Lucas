import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DdsErrorMessageComponent, DdsErrorMessagesComponent} from './dds-error-message.component';
import {DdsFormValidator} from '../validation/dds-form-validation.service';
  


let COMPONENTS = [
    DdsErrorMessageComponent,
    DdsErrorMessagesComponent,
];

let PROVIDERS = [
    DdsFormValidator
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: [PROVIDERS]
})
export class DdsErrorMessageModule {}

export * from './dds-error-message.component';
