import { Directive, OnChanges, Input, SimpleChanges, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { DdsValidatorsComponent } from './dds-validators.component';

@Directive({
    selector: '[DdsValidatorsDirective]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorsDirective), multi: true}]
})
export class DdsValidatorsDirective implements Validator, OnChanges {

    @Input('DdsValidatorsDirective') customValidatorFn: any;

   public valFn = Validators.nullValidator;

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['customValidatorFn'];
        if (change) {
            this.valFn = this.customValidatorFn();
        } else {
            this.valFn = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl): {[key: string]: any} {
        return this.valFn(control);
    }
}

@Directive({
    selector: 'input[type="number"], [ddsNumeric]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorInputNumber), multi: true}]
})
export class DdsValidatorInputNumber implements Validator {

    validator: ValidatorFn = DdsValidatorsComponent.isNumber();

    validate(control: AbstractControl): {[key: string]: any} {
        return this.validator(control);
    }
}

@Directive({
    selector: 'input[type="number"][min], [ddsNumeric][min]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorMin), multi: true}]
})
export class DdsValidatorMin implements Validator {
    @Input('min') value: any;

    validate(control: AbstractControl): {[key: string]: any} {
        const expected = parseFloat(this.value);
        return DdsValidatorsComponent.min(expected)(control);
    }
}

@Directive({
    selector: 'input[type="number"][max], [ddsNumeric][max]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorMax), multi: true}]
})
export class DdsValidatorMax implements Validator {
    @Input('max') value: any;

    validate(control: AbstractControl): {[key: string]: any} {
        const expected = parseFloat(this.value);
        return DdsValidatorsComponent.max(expected)(control);
    }
}

export abstract class BaseValidator implements Validator, OnInit {
    abstract getValidatorFn(): ValidatorFn;

    validator: ValidatorFn;

    ngOnInit(): void {
        this.validator = this.getValidatorFn();
    }

    validate(control: AbstractControl): {[key: string]: any} {
        return this.validator(control);
    }
}

@Directive({
    selector: '[ddsValidatorCpf]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorCPF), multi: true}]
})
export class DdsValidatorCPF extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidatorsComponent.cpf();
    }
}

@Directive({
    selector: '[ddsValidatorCNPJ]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorCNPJ), multi: true}]
})
export class DdsValidatorCNPJ extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidatorsComponent.cnpj();
    }
}

@Directive({
    selector: '[ddsValidatorPIS]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorPIS), multi: true}]
})
export class DdsValidatorPIS extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidatorsComponent.pis();
    }
}

@Directive({
    selector: '[ddsValidatorCEP]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorCEP), multi: true}]
})
export class DdsValidatorCEP extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidatorsComponent.cep();
    }
}

@Directive({
    selector: '[ddsValidatorDate]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorDate), multi: true}]
})
export class DdsValidatorDate extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidatorsComponent.date();
    }
}

@Directive({
    selector: '[ddsValidatorTime]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorTime), multi: true}]
})
export class DdsValidatorTime extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidatorsComponent.time();
    }
}

@Directive({
    selector: '[ddsValidatorDateTime]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorDateTime), multi: true}]
})
export class DdsValidatorDateTime extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidatorsComponent.dateTime();
    }
}
