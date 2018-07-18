import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdsValidatorsComponent } from './dds-validators.component';
import {
    DdsValidatorsDirective,
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

const COMPONENTS = [
    DdsValidatorsDirective,
    DdsValidatorInputNumber,
    DdsValidatorMin,
    DdsValidatorMax,
    DdsValidatorCPF,
    DdsValidatorCNPJ,
    DdsValidatorPIS,
    DdsValidatorCEP,
    DdsValidatorDate,
    DdsValidatorTime,
    DdsValidatorDateTime,
];

@NgModule({
    imports: [CommonModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: []
})
export class DdsValidationDirectivesModule {}

export * from './dds-validators.component';
export * from './dds-validators.directive';
