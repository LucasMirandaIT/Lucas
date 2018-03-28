import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { DdsFormValidator } from '../../../commom/validation/dds-form-validation.service';
import { DdsAnimations } from '../../../commom/dds-animation/dds-animations';
import { DdsNotificationService } from '../../../services/notification';

@Component({
  selector: 'public-selection',
  templateUrl: './public-selection.component.html',
  styleUrls: ['./public-selection.component.scss'],
  animations: [
    DdsAnimations.ddsVerticalFadeInOut,
    DdsAnimations.ddsFadeInOut,
    DdsAnimations.ddsHorizontalFadeInOut
  ]
})
export class PublicSelectionComponent {

  modules = ['Oculto', 'Preservado', 'Desenvolvimento']
  public valido: boolean = false;
  private formStatus: boolean = false;
  private subscriptions: Subscription[] = [];
  private isLeftVisible = true;
  @ViewChild('myForm') myForm: NgForm;

  constructor(private formValidator: DdsFormValidator, private notificationService: DdsNotificationService) { }

  ngAfterViewInit(): void {
    this.subscriptions.push(this.myForm.control.valueChanges.subscribe((status) => {
        if (this.formStatus && !this.myForm.valid) {
            this.formStatus = false;
            this.valido = false;
        } else {
            this.formStatus = true;
        }
    }));
}

ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
}
  testeSubmit() {
    this.notificationService.closeAll();
        if (!this.formValidator.isFormValid(this.myForm)) {
            this.notificationService.warn({
                title: 'Atenção',
                message: 'Por favor preencha todos os campos obrigatórios',
                timeout: true
            });
            this.valido = false;
            return;
        }
    this.notificationService.success({
        title: 'Sucesso',
        message: 'Dados salvos com sucesso',
        timeout: true
    });
  }

}
