import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';
import { DdsNotificationQueueComponent } from '../queue/dds-notification-queue.component';
import { DdsNotificationService, NotificationType } from '../../../services/notification/dds-notification.service';

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
    styleUrls: ['../dds-notification.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DdsNotificationAreaComponent implements OnInit, OnDestroy {
   public _subscriptions: Subscription[] = [];

    @ViewChildren(DdsNotificationQueueComponent) _queues: QueryList<DdsNotificationQueueComponent>;
    constructor(private _notificationService: DdsNotificationService,public router: Router) {}

    ngOnInit(): void {
        this._subscriptions.push(this._notificationService.notifications.subscribe((type: NotificationType) => {
            this.generateNotification(type);
        }));
        this._subscriptions.push(this._notificationService.actions.subscribe((action: string) => {
            if (action === 'closeAll') {
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

   public generateNotification(type: NotificationType) {
        this._queues.forEach((queue) => {
            if (queue.position === type.message.position) {
                queue.add(type);
            }
        });
    }
}
