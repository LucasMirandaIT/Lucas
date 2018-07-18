import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdsFormValidationService } from '../validation/dds-form-validation.service';
import { DdsErrorMessagesComponent } from './dds-error-messages.component';
import { DdsErrorMessagesDirective } from './dds-error-messages.directive';

const COMPONENTS = [
    DdsErrorMessagesComponent,
    DdsErrorMessagesDirective
];

const PROVIDERS = [
    DdsFormValidationService
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: [PROVIDERS]
})
export class DdsErrorMessagesModule {}

export * from './dds-error-messages.component';
