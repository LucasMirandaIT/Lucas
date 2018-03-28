import {AbstractControl, ValidatorFn} from '@angular/forms';

function isEmptyInputValue(value: any): boolean {
    return value == null || value.length === 0;
}

export class DdsValidators {

    static isNumber(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            return isNaN(control.value) ? {'NaN': true} : null;
        };
    }

    static min(min: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            let controlValue = parseFloat(control.value);
            return controlValue < min ? {'min': {expected: min}} : null;
        };
    }

    static max(max: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            let controlValue = parseFloat(control.value);
            return controlValue > max ? {'max': {expected: max}} : null;
        };
    }

    static cpf(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            let error: boolean = false;
            let cpfv = control.value;
            if (cpfv.length == 14 || cpfv.length == 11) {
                cpfv = cpfv.replace('.', '');
                cpfv = cpfv.replace('.', '');
                cpfv = cpfv.replace('-', '');

                let nonNumbers = /\D/;
                if (nonNumbers.test(cpfv)) {
                    error = true;
                } else {
                    if (cpfv == '00000000000' ||
                        cpfv == '11111111111' ||
                        cpfv == '22222222222' ||
                        cpfv == '33333333333' ||
                        cpfv == '44444444444' ||
                        cpfv == '55555555555' ||
                        cpfv == '66666666666' ||
                        cpfv == '77777777777' ||
                        cpfv == '88888888888' ||
                        cpfv == '99999999999') {

                        error = true;
                    } else {
                        let a: any = [];
                        let b: any = 0;
                        let c: any = 11;

                        for (let i = 0; i < 11; i++) {
                            a[i] = cpfv.charAt(i);
                            if (i < 9) {
                                b += (a[i] * --c);
                            }
                        }
                        let x: any;
                        if ((x = b % 11) < 2) {
                            a[9] = 0;
                        } else {
                            a[9] = 11 - x;
                        }
                        b = 0;
                        c = 11;
                        for (let y = 0; y < 10; y++) {
                            b += (a[y] * c--);
                        }

                        if ((x = b % 11) < 2) {
                            a[10] = 0;
                        } else {
                            a[10] = 11 - x;
                        }
                        if ((cpfv.charAt(9) != a[9]) || (cpfv.charAt(10) != a[10])) {
                            error = true;
                        }
                    }
                }
            } else {
                error = true;
            }

            return error ? {'cpf': error} : null;
        };
    }

    static cnpj(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            let error: boolean = false;
            let cnpj = control.value;
            cnpj = cnpj.replace('/', '');
            cnpj = cnpj.replace('.', '');
            cnpj = cnpj.replace('.', '');
            cnpj = cnpj.replace('-', '');

            if (cnpj == '00000000000000' ||
                cnpj == '11111111111111' ||
                cnpj == '22222222222222' ||
                cnpj == '33333333333333' ||
                cnpj == '44444444444444' ||
                cnpj == '55555555555555' ||
                cnpj == '66666666666666' ||
                cnpj == '77777777777777' ||
                cnpj == '88888888888888' ||
                cnpj == '99999999999999' ) {

                error = true;
            } else {
                let numeros: any, digitos: any, soma: any, resultado: any, pos: any, tamanho: any, digitosIguais: any;
                digitosIguais = 1;

                if (cnpj.length == 14 || cnpj.length == 15) {

                    for (let i = 0; i < cnpj.length - 1; i++) {
                        if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
                            digitosIguais = 0;
                            break;
                        }
                    }

                    if (!digitosIguais) {
                        tamanho = cnpj.length - 2;
                        numeros = cnpj.substring(0, tamanho);
                        digitos = cnpj.substring(tamanho);
                        soma = 0;
                        pos = tamanho - 7;

                        for (let i = tamanho; i >= 1; i--) {
                            soma += numeros.charAt(tamanho - i) * pos--;
                            if (pos < 2) {
                                pos = 9;
                            }
                        }
                        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                        if (resultado != digitos.charAt(0)) {
                            error = true;
                        }
                        tamanho = tamanho + 1;
                        numeros = cnpj.substring(0, tamanho);
                        soma = 0;
                        pos = tamanho - 7;
                        for (let i = tamanho; i >= 1; i--) {
                            soma += numeros.charAt(tamanho - i) * pos--;
                            if (pos < 2) {
                                pos = 9;
                            }
                        }
                        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                        if (resultado != digitos.charAt(1)) {
                            error = true;
                        }
                    } else {
                        error = true;
                    }

                } else {
                    error = true;
                }
            }

            return error ? {'cnpj': error} : null;
        };
    }

    static pis(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            let pis = control.value;

            pis = pis.replace(/\./g, '');
            pis = pis.replace(/\-/g, '');
            let soma: number =
                (Number(pis.substring(0, 1)) * 3) +
                (Number(pis.substring(1, 2)) * 2) +
                (Number(pis.substring(2, 3)) * 9) +
                (Number(pis.substring(3, 4)) * 8) +
                (Number(pis.substring(4, 5)) * 7) +
                (Number(pis.substring(5, 6)) * 6) +
                (Number(pis.substring(6, 7)) * 5) +
                (Number(pis.substring(7, 8)) * 4) +
                (Number(pis.substring(8, 9)) * 3) +
                (Number(pis.substring(9, 10)) * 2);
            let resto = soma % 11;
            let resultado = 11 - resto;
            if (resultado == 10 || resultado == 11) {
                resultado = 0;
            }
            let digitoVerificador = Number(pis.substring(10, 11));
            return !(resultado == digitoVerificador) ? {'pis': true} : null;
        };
    }

    static cep(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            let cep = control.value;

            let regex = /^[0-9]{5}\-[0-9]{3}$/;
            return !regex.exec(cep) ? {'cep': true} : null;
        };
    }

    static date(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            let error: boolean = false;
            let date = control.value;

            let dateFormat = /^\d{1,4}[\.|\/|-]\d{1,2}[\.|\/|-]\d{1,4}$/;

            if (dateFormat.test(date)) {
                // remove any leading zeros from date values
                date = date.replace(/0*(\d*)/gi, '$1');
                let dateArray = date.split(/[\.|\/|-]/);

                // correct month value
                dateArray[1] = dateArray[1] - 1;

                // correct year value
                if (dateArray[2].length < 4) {
                    // correct year value
                    dateArray[2] = (parseInt(dateArray[2]) < 50) ? 2000 + parseInt(dateArray[2]) : 1900 + parseInt(dateArray[2]);
                }

                let testDate = new Date(dateArray[2], dateArray[1], dateArray[0], 12, 0, 0, 0);
                if (testDate.getDate() != dateArray[0] || testDate.getMonth() != dateArray[1] || testDate.getFullYear() != dateArray[2]) {
                    error = true;
                }
            } else {
                error = true;
            }

            return error ? {'date': true} : null;
        };
    }

    static time(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            let time = control.value;

            return !(/^([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/.test(time)) ? {'time': true} : null;
        };
    }

    static dateTime(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isEmptyInputValue(control.value)) {
                return null;  // don't validate empty values to allow optional controls
            }

            let error: boolean = false;
            let dateTime = control.value;

            let regex = /^\d{1,2}[\.|\/|-]\d{1,2}[\.|\/|-]\d{1,4} \d{1,2}:\d{1,2}:\d{1,2}$/;
            if (regex.test(dateTime)) {
                let dateArray = dateTime.split(' ');
                let newControlDate: any = {value: dateArray[0]};
                let newControlTime: any = {value: dateArray[1]};

                error = DdsValidators.date()(newControlDate) != null || DdsValidators.time()(newControlTime) != null;
            } else {
                error = true;
            }

            return error ? {'dateTime': true} : null;
        };
    }
}
