import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms/';
import { Form, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent implements OnInit {

  formComponent: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
  this.formComponent = this.formBuilder.group({
      nome: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6),
      ]],
      email: [null,
      [Validators.required,
      Validators.email
    ]]
  })
  }

  onSubmit() {
    // console.log(this.formComponent.controls['nome'].valid);
    if (this.formComponent.valid == true) {

    } else {
      console.log ('invalido');
      Object.keys(this.formComponent.controls)
      .forEach(campo => {
        console.log (campo.valid);
        const controle = this.formComponent.get(campo);
        if (controle.valid ==false) {
          controle.markAsTouched();
        }
      } );
    }
  }

  isError (campo: string) {
    return (this.formComponent.controls[campo].valid == false &&
            this.formComponent.controls[campo].touched == true);
  }

  isSuccess (campo: string) {
    return (this.formComponent.controls[campo].valid == true &&
            this.formComponent.controls[campo].touched == true
            || this.formComponent.controls[campo].dirty == true);
  }

  aplicarCssElemento(campo: string){
    return {'has-error': (this.isError (campo)),
            'has-success' : (this.isSuccess(campo))};
  }

  consultarCEP() {
    this.ConsultaCepService.consultarCEP(
      // this.formComponent.get('cep')
      '01537001'
    )
    .subscribe(response => {
      console.log(response);

      this.formComponent.patchValue({
        // enderecoForm: response.logradouro;
  }
}
}

}
