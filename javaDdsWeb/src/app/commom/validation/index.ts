import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    DdsValidatorCustom,
    DdsValidatorInputNumber,
    DdsValidatorMin,
    DdsValidatorMax,
    DdsValidatorCPF,
    DdsValidatorCNPJ,
    DdsValidatorPIS,
    DdsValidatorCEP,
    DdsValidatorDate,
    DdsValidatorTime,
    DdsValidatorDateTime
} from './dds-validators.directive';

let COMPONENTS = [
    DdsValidatorCustom,
    DdsValidatorInputNumber,
    DdsValidatorMin,
    DdsValidatorMax,
    DdsValidatorCPF,
    DdsValidatorCNPJ,
    DdsValidatorPIS,
    DdsValidatorCEP,
    DdsValidatorDate,
    DdsValidatorTime,
    DdsValidatorDateTime
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: []
})
export class DdsValidationDirectivesModule {}

export * from './dds-validators';
export * from './dds-validators.directive';
