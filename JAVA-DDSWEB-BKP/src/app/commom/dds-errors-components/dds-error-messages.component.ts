import { Component, Input, OnInit, ContentChildren, QueryList, Directive, TemplateRef, ViewChildren, OnDestroy } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { FormControl, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { DdsErrorMessagesDirective } from './dds-error-messages.directive';

@Component({
    moduleId: module.id,
    selector: 'dds-error-messages',
    template: `
        <ng-content select="[ddsErrorMessageDirective]"></ng-content>
        <ng-template ddsErrorMessageDirective type="required">Campo obrigatório</ng-template>
        <ng-template ddsErrorMessageDirective type="minlength" let-myError="error">
        Campo deve possuir no mínimo {{myError.requiredLength}} caracteres
        </ng-template>
        <ng-template ddsErrorMessageDirective type="maxlength" let-myError="error">
        Campo deve possuir no máximo {{myError.requiredLength}} caracteres
        </ng-template>
        <ng-template ddsErrorMessageDirective type="cpf">CPF Inválido</ng-template>
        <ng-template ddsErrorMessageDirective type="cnpj">CNPJ Inválido</ng-template>
        <ng-template ddsErrorMessageDirective type="pis">Número de PIS Inválido</ng-template>
        <ng-template ddsErrorMessageDirective type="cep">CEP Inválido</ng-template>
        <ng-template ddsErrorMessageDirective type="date">Data Inválida</ng-template>
        <ng-template ddsErrorMessageDirective type="time">Hora Inválida</ng-template>
        <ng-template ddsErrorMessageDirective type="dateTime">Date e Hora Inválida</ng-template>
        <ng-template ddsErrorMessageDirective type="min" let-myError="error">O valor deve ser maior que {{myError.expected}}</ng-template>
        <ng-template ddsErrorMessageDirective type="max" let-myError="error">O valor deve ser menor que {{myError.expected}}</ng-template>
        <ng-template ddsErrorMessageDirective type="NaN">Preencha um número válido</ng-template>
        <span *ngIf="currentMessage" @showMessage>
            <ng-template [ngTemplateOutlet]="currentMessage?.template" [ngTemplateOutletContext]="currentError"></ng-template>
        </span>
    `,
    styleUrls: ['dds-error-messages.component.scss'],
    animations: [
        trigger('showMessage', [
            transition(':enter', [
                style({opacity: '0'}),
                animate('225ms ease-in', style({opacity: '1'}))
            ]),
            transition(':leave', [
                style({opacity: '1'}),
                animate('125ms ease-out', style({opacity: '0'}))
            ])
        ])
    ]
})
export class DdsErrorMessagesComponent implements OnInit, OnDestroy {
    _subscriptions: Subscription[] = [];
    formControl: FormControl;
    currentMessage: DdsErrorMessagesDirective;
    currentError: any;

    @Input() control: NgModel | FormControl;

    @ContentChildren(DdsErrorMessagesDirective) _messages: QueryList<DdsErrorMessagesDirective>;
    @ViewChildren(DdsErrorMessagesDirective) _internalMessages: QueryList<DdsErrorMessagesDirective>;

    ngOnInit(): void {
        if ((<NgModel>this.control).control) {
            this.formControl = (<NgModel>this.control).control;
        } else {
            this.formControl = this.control as FormControl;
        }

        // Wrap markAsTouched to update this component when the component is first touched
        const originalMarkAsTouched = this.formControl.markAsTouched;
        this.formControl.markAsTouched = (elem: any) => {
            const wasTouched = this.formControl.touched;
            originalMarkAsTouched.apply(this.formControl, [elem]);
            if (!wasTouched) {
                this.updateErrorMessages();
            }
        };

        this._subscriptions.push(this.formControl.valueChanges.subscribe(() => {
            this.updateErrorMessages();
        }));
        this._subscriptions.push(this.formControl.statusChanges.subscribe(() => {
            this.updateErrorMessages();
        }));
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach((sub) => sub.unsubscribe());
    }

   public updateErrorMessages() {
        if (this.formControl.touched) {
            const messages = this.mergeMessages();
            for (let i = 0; i < messages.length; i++) {
                const message = messages[i];
                let error: any = null;

                for (const key in this.formControl.errors) {
                    if (message.contains(key)) {
                        error = this.formControl.errors[key];
                        break;
                    }
                }

                if (error) {
                    this.currentMessage = message;
                    this.currentError = {error: error};
                    break;
                } else {
                    this.currentMessage = null;
                    this.currentError = null;
                }
            }
        }
    }

    public mergeMessages() {
        const newMessages: DdsErrorMessagesDirective[] = [];
        const keys: any = {};

        this._messages.forEach((message) => {
            newMessages.push(message);
            message.typesList.forEach((key) => {
                keys[key] = 1;
            });
        });

        this._internalMessages.forEach((message) => {
            if (!message.typesList.find((elem) => keys[elem])) {
                newMessages.push(message);
                message.typesList.forEach((key) => {
                    keys[key] = 1;
                });
            }
        });

        return newMessages;
    }
}
