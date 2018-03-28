import {Injectable} from '@angular/core';
import {NgForm, FormGroup} from '@angular/forms';

@Injectable()
export class DdsFormValidator {

    isFormValid(form: NgForm | FormGroup) {
        let isValid = form.valid;
        if (!isValid) {
            for (let key in form.controls) {
                let control = form.controls[key];
                control.markAsTouched();
                control.updateValueAndValidity();
            }
        }
        return isValid;
    }

}
