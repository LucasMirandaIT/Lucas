import { Component, OnInit, OnDestroy, Input, ViewRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';
// import { NotificationType } from '../../../services/notification/dds-notification.service';
import { DdsNotificationButton } from '../../../services/notification/dds-notification-message';
import { DdsNotificationComponent } from '../dds-notification.component';
import { NotificationType } from '../../../services/notification/dds-notification.service';

@Component({
    moduleId: module.id,
    selector: 'dds-notification-item',
    template: `
        <div class="dds-notification-item-areas"
            [class.dds-has-icon]="notification.message && notification.message.icon"
            [class.dds-has-title]="notification.message && notification.message.title">
            <div class="dds-notification-item-icon" *ngIf="notification.message.icon">
                <mat-icon>{{notification.message.icon}}</mat-icon>
            </div>
            <div class="dds-notification-item-content">
                <div class="dds-notification-item-title" *ngIf="notification.message.title">{{notification.message.title}}</div>
                <div class="dds-notification-item-body" [innerHtml]="notification.message.message"></div>
            </div>
        </div>
        <div class="dds-notification-item-buttons" *ngIf="notification.message.buttons?.length > 0">
            <button mat-button type="button" *ngFor="let button of notification.message.buttons" (click)="clickButton(button)">
            {{button.label}}
            </button>
            </div>
        <div class="dds-notification-button-close" (click)="closeItem()">
          <mat-icon>close</mat-icon>
        </div>
        <mat-progress-bar
            *ngIf="config.hasTimer"
            [value]="config.percent"
            mode="determinate">
        </mat-progress-bar>
    `,
    host: {
        '[class.dds-success]': 'notification.type == "SUCCESS"',
        '[class.dds-error]': 'notification.type == "ERROR"',
        '[class.dds-warn]': 'notification.type == "WARN"',
        '[class.dds-info]': 'notification.type == "INFO"',
        '[@notificationState]': ''
    },
    animations: [
        trigger('notificationState', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
              style({transform: 'translateX(100%)'}),
              animate(150)
            ]),
            transition('* => void', [
              animate(150, style({transform: 'translateX(100%)'}))
            ])
          ])
    ]
})
export class DdsNotificationItemComponent {

    @Input() notification: NotificationType;
    @Input() config: DdsNotificationComponent;
    @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
    clickButton(button: DdsNotificationButton) {
        button.action();
        if (button.closeNotification) {
            this.closeItem();
        }
    }

    closeItem() {
        this.onClose.emit();
    }
}

