import {
    Component,
    OnInit,
    OnDestroy,
    ViewContainerRef,
    TemplateRef,
    ViewChild,
    Directive,
    Input,
    EventEmitter,
    Output,
    ViewEncapsulation,
    ViewChildren,
    QueryList,
    ViewRef
} from '@angular/core';
import {
    trigger,
    style,
    transition,
    animate
} from '@angular/animations';

import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';
import { NotificationType, DdsNotificationButton, DdsNotificationService } from '../../services/notification';

export class NotificationItemConfig {
    constructor(public hasTimer: boolean = false, public percent: number = 0, public automaticClosed: boolean = false) {}
}

@Directive({
    selector: '[ddsNotificationItem]'
})
export class DdsNotificationItemDirective implements OnDestroy {

    constructor(private viewContainer: ViewContainerRef,
                private templateRef: TemplateRef<{notification: NotificationType, config: NotificationItemConfig, destroy: Function}>) {}

    show(notification: NotificationType, config: NotificationItemConfig): ViewRef {
        let view = this.viewContainer.createEmbeddedView(this.templateRef, {
            notification: notification,
            config: config,
            destroy: () => {
                view.destroy();
            }
        });
        view.onDestroy(() => {
            if (notification.message.onDismiss) {
                notification.message.onDismiss(config.automaticClosed);
            }
        });
        return view;
    }

    ngOnDestroy(): void {
        this.viewContainer.clear();
    }
}

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
            <button mat-button type="button" *ngFor="let button of notification.message.buttons" (click)="clickButton(button)">{{button.label}}</button>
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
            transition('void => *', [
                style({height: '0', opacity: '0'}),
                animate('300ms 150ms ease-in', style({height: '*', opacity: '1'}))
            ]),
            transition('* => void', [
                style({height: '*'}),
                animate('150ms ease-out', style({opacity: '0', height: '0'}))
            ])
        ])
    ]
})
export class DdsNotificationItemComponent {

    @Input() notification: NotificationType;
    @Input() config: NotificationItemConfig;
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

@Component({
    moduleId: module.id,
    selector: 'dds-notification-queue',
    template: `
        <ng-template ddsNotificationItem let-notification="notification" let-destroy="destroy" let-config="config">
            <dds-notification-item [notification]="notification" [config]="config" (onClose)="destroy()"></dds-notification-item>
        </ng-template>
    `,
    host: {
        '[class]': 'position'
    }
})
export class DdsNotificationQueueComponent {
    @Input() maxSize: number = 4;
    @Input() position: string;

    itemId: number = 0;
    queue: any[] = [];

    @ViewChild(DdsNotificationItemDirective) notificationItem: DdsNotificationItemDirective;

    add(type: NotificationType) {
        if (this.queue.length == this.maxSize) {
            let value = this.queue.shift();
            value.view.destroy();
            this.clearInterval(value.timeout);
        }

        let config: NotificationItemConfig = new NotificationItemConfig(!!type.message.timeout, 0, false);
        let viewRef: ViewRef = this.notificationItem.show(type, config);

        let id = this.itemId++;
        let timeoutFunc: any;
        if (type.message.timeout) {
            let currentTime: number = 0;
            config.percent = 0;
            timeoutFunc = setInterval(() => {
                if (currentTime >= type.message.timeout) {
                    config.percent = 100;
                    let item = this.queue.find((queue: any) => queue.id == id);
                    if (item) {
                        config.automaticClosed = true;
                        item.view.destroy();
                        this.queue.splice(this.queue.indexOf(item), 1);
                    }
                    this.clearInterval(timeoutFunc);
                } else {
                    currentTime += 100;
                    config.percent = (currentTime / +type.message.timeout) * 100;
                }
            }, 100);
        }

        this.queue.push({id: id, type: type, view: viewRef, timeout: timeoutFunc, routesChanged: 0});
    }

    closeAll() {
        this.queue.forEach((item: any) => {
            this.clearItem(item);
        });
        this.queue.length = 0;
    }

    onRouteChanged() {
        this.queue.forEach((item) => {
            item.routesChanged++;
            switch (item.type.message.keepOnRouteChange) {
                case -1:
                    break;
                case 0:
                    this.clearItem(item);
                    break;
                default:
                    if (item.type.message.keepOnRouteChange < item.routesChanged) {
                        this.clearItem(item);
                    }
            }
        });
    }

    private clearItem(item: any) {
        item.view.destroy();
        this.clearInterval(item.timeout);
    }

    private clearInterval(interval: any) {
        try {
            clearInterval(interval);
        } catch (e) {}
    }
}

@Component({
    moduleId: module.id,
    selector: 'dds-notification-area',
    template: `
        <dds-notification-queue position="bottomLeft"></dds-notification-queue>
        <dds-notification-queue position="bottomCenter"></dds-notification-queue>
        <dds-notification-queue position="bottomRight"></dds-notification-queue>
        <dds-notification-queue position="Center"></dds-notification-queue>
        <dds-notification-queue position="topLeft"></dds-notification-queue>
        <dds-notification-queue position="topCenter"></dds-notification-queue>
        <dds-notification-queue position="topRight"></dds-notification-queue>
    `,
    styleUrls: ['dds-notification.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DdsNotificationAreaComponent implements OnInit, OnDestroy {
    private _subscriptions: Subscription[] = [];

    @ViewChildren(DdsNotificationQueueComponent) _queues: QueryList<DdsNotificationQueueComponent>;

    constructor(private _notificationService: DdsNotificationService, private router: Router) {}

    ngOnInit(): void {
        this._subscriptions.push(this._notificationService.notifications.subscribe((type: NotificationType) => {
            this.generateNotification(type);
        }));
        this._subscriptions.push(this._notificationService.actions.subscribe((action: string) => {
            if (action == 'closeAll') {
                this._queues.forEach((queue) => queue.closeAll());
            }
        }));
        this._subscriptions.push(this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this._queues.forEach((queue) => queue.onRouteChanged());
            }
        }));
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach((sub) => sub.unsubscribe());
    }

    private generateNotification(type: NotificationType) {
        this._queues.forEach((queue) => {
            if (queue.position == type.message.position) {
                queue.add(type);
            }
        });
    }
}
