import { Component, Input, OnInit, ContentChildren, QueryList, Directive, TemplateRef, ViewChildren, OnDestroy } from '@angular/core'; 
import { trigger, style, transition, animate } from '@angular/animations';
import {FormControl, NgModel} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Directive({
    selector: '[ddsErrorMessage]'
})
export class DdsErrorMessageComponent {
    @Input() type: string | string[];
    @Input() error: any;

    get typesList(): string[] {
        if (typeof this.type === 'string') {
            this.type = [this.type];
        }
        return this.type;
    }

    constructor(public template: TemplateRef<DdsErrorMessageComponent>) {
    }

    contains(key: string): boolean {
        return this.typesList && !!this.typesList.find((elem) => elem == key);
    }
}

@Component({
    moduleId: module.id,
    selector: 'dds-error-messages',
    template: `
        <ng-content select="[ddsErrorMessage]"></ng-content>
        <ng-template ddsErrorMessage type="required">Campo obrigatório</ng-template>
        <ng-template ddsErrorMessage type="minlength" let-myError="error">Campo deve possuir no mínimo {{myError.requiredLength}} caracteres</ng-template>
        <ng-template ddsErrorMessage type="maxlength" let-myError="error">Campo deve possuir no máximo {{myError.requiredLength}} caracteres</ng-template>
        <ng-template ddsErrorMessage type="cpf">CPF Inválido</ng-template>
        <ng-template ddsErrorMessage type="cnpj">CNPJ Inválido</ng-template>
        <ng-template ddsErrorMessage type="pis">Número de PIS Inválido</ng-template>
        <ng-template ddsErrorMessage type="cep">CEP Inválido</ng-template>
        <ng-template ddsErrorMessage type="date">Data Inválida</ng-template>
        <ng-template ddsErrorMessage type="time">Hora Inválida</ng-template>
        <ng-template ddsErrorMessage type="dateTime">Date e Hora Inválida</ng-template>
        <ng-template ddsErrorMessage type="min" let-myError="error">O valor deve ser maior que {{myError.expected}}</ng-template>
        <ng-template ddsErrorMessage type="max" let-myError="error">O valor deve ser menor que {{myError.expected}}</ng-template>
        <ng-template ddsErrorMessage type="NaN">Preencha um número válido</ng-template>
        
        <span *ngIf="currentMessage" @showMessage>
            <ng-template [ngTemplateOutlet]="currentMessage?.template" [ngTemplateOutletContext]="currentError"></ng-template>
        </span>
    `,
    styleUrls: ['dds-error-message.component.scss'],
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
    private _subscriptions: Subscription[] = [];
    private formControl: FormControl;

    currentMessage: DdsErrorMessageComponent;
    currentError: any;

    @Input() control: NgModel | FormControl;

    @ContentChildren(DdsErrorMessageComponent) _messages: QueryList<DdsErrorMessageComponent>;
    @ViewChildren(DdsErrorMessageComponent) _internalMessages: QueryList<DdsErrorMessageComponent>;

    ngOnInit(): void {
        if ((<NgModel>this.control).control) {
            this.formControl = (<NgModel>this.control).control;
        } else {
            this.formControl = this.control as FormControl;
        }

        // Wrap markAsTouched to update this component when the component is first touched
        let originalMarkAsTouched = this.formControl.markAsTouched;
        this.formControl.markAsTouched = (elem: any) => {
            let wasTouched = this.formControl.touched;
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

    private updateErrorMessages() {
        if (this.formControl.touched) {
            let messages = this.mergeMessages();
            for (let i = 0; i < messages.length; i++) {
                let message = messages[i];
                let error: any = null;

                for (let key in this.formControl.errors) {
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

    private mergeMessages() {
        let newMessages: DdsErrorMessageComponent[] = [];
        let keys: any = {};

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
