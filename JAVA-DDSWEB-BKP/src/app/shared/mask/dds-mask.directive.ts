import {Directive, forwardRef, Input, Renderer, ElementRef, OnChanges, SimpleChanges} from '@angular/core';
import {MaskedInputDirective} from 'angular2-text-mask';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
    host: {
        '(input)': 'onInput($event.target.value)',
        '(blur)': 'onBlur($event)'
    },
    selector: '[ddsMask]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DdsMaskDirective),
        multi: true
    }]
})
export class DdsMaskDirective extends MaskedInputDirective implements OnChanges {

    @Input('ddsMask') ddsMask: string;

    convertedMask: string;
    placeholderChar = '_';

    constructor(renderer: Renderer, element: ElementRef) {
        super(renderer, element);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.textMaskConfig = {
            mask: this.convertMask(),
            guide: true,
            placeholderChar: this.placeholderChar,
            pipe: undefined,
            keepCharPositions: false
        };
        super.ngOnChanges(changes);
    }

    onBlur(event: any) {
        let currentValue = event.target.value.replace(new RegExp(this.placeholderChar, 'g'), '');
        if (!this.matchesSizeForCurrentMask(currentValue)) {
            currentValue = '';
        }
        event.target.value = currentValue;
        this._onChange(currentValue);

        this._onTouched();
    }

    public convertMask(): any {
        this.convertedMask = this.ddsMask;
        switch (this.convertedMask.toUpperCase()) {
            case 'CPF':
                this.convertedMask = '999.999.999-99';
                break;
            case 'AGENCIA':
                this.convertedMask = '9999';
                break;
            case 'REMEDY':
                this.convertedMask = '999999999999999';
                break;    
            case 'CONTA':
                this.convertedMask = '9999999';
                break;
            case 'CNPJ':
                this.convertedMask = '99.999.999/9999-99';
                break;
            case 'PIS':
                this.convertedMask = '999.9999.999-9';
                break;
            case 'TELEFONE-FIXO':
                this.convertedMask = '(99) 9999-9999';
                break;
            case 'TELEFONE-CELULAR':
                this.convertedMask = '(99) 9999-9999?9';
                break;
            case 'CEP':
                this.convertedMask = '99999-999';
                break;
            case 'DATE':
                this.convertedMask = '99/99/9999';
                break;
            case 'TIME':
                this.convertedMask = '99:99:99';
                break;
            case 'DATETIME':
            case 'DATE-TIME':
                this.convertedMask = '99/99/9999 99:99:99';
                break;
        }

        return this.convertRawMask(this.convertedMask);
    }

    public convertRawMask(ddsMask: any): any[] {
        const finalMask: any[] = [];

        for (let i = 0; i < ddsMask.length; i++) {
            let char = ddsMask[i];
            let regex: any;
            switch (char) {
                case '9':
                    regex = /[\d]/;
                    break;
                case 'A':
                    regex = /[a-zA-Z0-9]/;
                    break;
                case 'S':
                    regex = /[a-zA-Z]/;
                    break;
                case '?':
                    char = ddsMask[++i];
                    switch (char) {
                        case '9':
                            regex = /[\d]{0,1}/;
                            break;
                        case 'A':
                            regex = /[a-zA-Z0-9]{0,1}/;
                            break;
                        case 'S':
                            regex = /[a-zA-Z]{0,1}/;
                            break;
                    }
                    break;
                default:
                    regex = char;
            }
            finalMask.push(regex);
        }
        return finalMask;
    }

   public matchesSizeForCurrentMask(currentValue: string): boolean {
        const numberOfOptionals: number = (this.convertedMask.match(/\?/g) || []).length;
        const maskLength: number = this.convertedMask.replace(/\?/g, '').length;
        const inputLength: number = currentValue.replace(/\?/g, '').length;
        return (maskLength - numberOfOptionals) <= inputLength && inputLength <= maskLength;
    }
}
