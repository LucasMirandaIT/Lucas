import { Injectable } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Injectable()
export class DdsFormValidationService {

    isFormValid(form: NgForm | FormGroup) {
        const isValid = form.valid;
        if (!isValid) {
            for (const key of Object.keys(form.controls)) {
                const control = form.controls[key];
                control.markAsTouched();
                control.updateValueAndValidity();
            }
        }
        return isValid;
    }

}
