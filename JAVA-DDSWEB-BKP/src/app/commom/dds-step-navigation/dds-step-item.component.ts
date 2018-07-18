import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { StepOptions } from './step-navigation.model';

@Component({
    selector: 'dds-step-item',
    template: `
    <div (click)="onShowDetails();">
        <div class="step-header">
            <div class="header"></div>
            <div class="step-header-circle"
            [class.done]="stepOption[index].status === 'DONE' ? true : false"
            [class.current]="stepOption[index].status === 'CURRENT' ? true : false"
            [class.none]="stepOption[index].status === 'NONE' ? true : false">
                <span style="float: left" *ngIf="stepOption[index].status != 'DONE'">{{stepOption[index].index + 1}}</span>
                <mat-icon style="font-size: 16px; line-height: 24px" *ngIf="stepOption[index].status === 'DONE'">done</mat-icon>
            </div>
            <strong [class.title-done]="stepOption[index].status === 'DONE'"
            [class.deactivated]="stepOption[index].status === 'NONE'">{{stepOption[index].titulo}}</strong>
        </div>
        <div [class.step-content]="stepOption[index].index != 1 ? true : false"
             [class.step-content-last]="stepOption[index].index == 1 ? true : false">
            <div [@expandCollapseDetails] *ngIf="_stepOption[index].expand" class="step-content-line">
                <div class="step-content-center">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./dds-step-navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('expandCollapseDetails', [
            state('void', style({
                'height': '0px',
                overflow: 'hidden'
            })),
            transition(':enter', [
                animate('500ms ease-in-out', style({
                    'height': '*',
                    overflow: 'hidden'
                }))
            ]),
            transition(':leave', [
                animate('500ms ease-in-out', style({
                    'height': '0px',
                    overflow: 'hidden'
                }))
            ])
        ])
      ],
})
export class DdsStepItemComponent {
    @Input() index = 0;
    @Input() expand = false;
    @Output() stepOptionChange: EventEmitter<any> = new EventEmitter();

    _stepOption: StepOptions[] = [];

    @Input() get stepOption(): StepOptions[] {
        return this._stepOption;
    }

    set stepOption(val: StepOptions[]) {
        this._stepOption = val;
        this.stepOptionChange.emit(val);
    }

    onShowDetails() {
        if (this.stepOption.length === 2) {
            if (this.stepOption[0].status === 'CURRENT') {
                return;
            } else {
                this.onExpand();
            }
        } else {
            this.onExpand();
        }
    }

    onExpand() {
        this._stepOption.forEach(item => {
            if (item.status === 'NONE') { return; }
            if (!item.isNext) {
                if (this.index === item.index) {
                    item.expand = true;
                } else {
                    item.expand = false;
                }
            } else {
                item.isNext = false;
            }
        });
    }

}
