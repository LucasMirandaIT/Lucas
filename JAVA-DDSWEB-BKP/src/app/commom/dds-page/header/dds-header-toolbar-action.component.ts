import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatInput} from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'dds-header-toolbar-action',
    template: `
        <div class="dds-header-toolbar-action">
            <button #btn mat-raised-button color="accent" [type]="type" *ngIf="value" [attr.form]="form" [disabled]="disabled">
                <span>{{value}}</span>
            </button>
            <button mat-icon-button [type]="type" *ngIf="!value" [attr.form]="form" [disabled]="disabled">
                <mat-icon>{{icon}}</mat-icon>
            </button>
        </div>
        <div class="dds-header-toolbar-action-responsive">
            <button mat-icon-button [type]="type" [attr.form]="form" [disabled]="disabled">
                <mat-icon>{{icon}}</mat-icon>
            </button>
        </div>
    `,
    styleUrls: ['dds-header-toolbar-action.scss']
})
export class DdsHeaderToolbarActionComponent implements OnInit {
    @Input() value: string;
    @Input() icon: string;
    @Input() type: string;
    @Input() form: string;
    @Input() disabled: boolean;

    @ViewChild('btn')
    actionButton: MatInput;


    ngOnInit(): void {
        if (!this.type) {
            throw new Error('type is mandatory for dds-header-toolbar-action');
        }
        if (!this.icon) {
            throw new Error('icon is mandatory for dds-header-toolbar-action');
        }
    }

    focus() {
        if (this.actionButton) {
            this.actionButton.focus();
        }
    }

}
