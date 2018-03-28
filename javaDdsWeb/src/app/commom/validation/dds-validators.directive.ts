import {Directive, OnChanges, Input, SimpleChanges, forwardRef, OnInit} from '@angular/core';
import {NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import {DdsValidators} from './dds-validators';

@Directive({
    selector: '[ddsValidatorCustom]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorCustom), multi: true}]
})
export class DdsValidatorCustom implements Validator, OnChanges {

    @Input('ddsValidatorCustom') customValidatorFn: any;

    private valFn = Validators.nullValidator;

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

    validator: ValidatorFn = DdsValidators.isNumber();

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
        let expected = parseFloat(this.value);
        return DdsValidators.min(expected)(control);
    }
}

@Directive({
    selector: 'input[type="number"][max], [ddsNumeric][max]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorMax), multi: true}]
})
export class DdsValidatorMax implements Validator {
    @Input('max') value: any;

    validate(control: AbstractControl): {[key: string]: any} {
        let expected = parseFloat(this.value);
        return DdsValidators.max(expected)(control);
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
        return DdsValidators.cpf();
    }
}

@Directive({
    selector: '[ddsValidatorCNPJ]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorCNPJ), multi: true}]
})
export class DdsValidatorCNPJ extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidators.cnpj();
    }
}

@Directive({
    selector: '[ddsValidatorPIS]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorPIS), multi: true}]
})
export class DdsValidatorPIS extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidators.pis();
    }
}

@Directive({
    selector: '[ddsValidatorCEP]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorCEP), multi: true}]
})
export class DdsValidatorCEP extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidators.cep();
    }
}

@Directive({
    selector: '[ddsValidatorDate]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorDate), multi: true}]
})
export class DdsValidatorDate extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidators.date();
    }
}

@Directive({
    selector: '[ddsValidatorTime]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorTime), multi: true}]
})
export class DdsValidatorTime extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidators.time();
    }
}

@Directive({
    selector: '[ddsValidatorDateTime]',
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => DdsValidatorDateTime), multi: true}]
})
export class DdsValidatorDateTime extends BaseValidator {
    getValidatorFn(): ValidatorFn {
        return DdsValidators.dateTime();
    }
}
