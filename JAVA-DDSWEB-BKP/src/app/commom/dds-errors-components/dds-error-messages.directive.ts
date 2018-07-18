import { Component, Input, OnInit, ContentChildren, QueryList, Directive, TemplateRef, ViewChildren, OnDestroy } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { FormControl, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { DdsErrorMessagesComponent } from './dds-error-messages.component';

@Directive({
    selector: '[DdsErrorMessagesDirective]'
})
export class DdsErrorMessagesDirective {
    @Input() type: string | string[];
    @Input() error: any;

    public get typesList(): string[] {
        if (typeof this.type === 'string') {
            this.type = [this.type];
        }
        return this.type;
    }

    constructor(public template: TemplateRef<DdsErrorMessagesComponent>) {
    }

    public contains(key: string): boolean {
        return this.typesList && !!this.typesList.find((elem) => elem === key);
    }
}
