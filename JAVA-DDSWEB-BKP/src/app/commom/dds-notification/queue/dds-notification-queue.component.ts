import { Component, Input, ViewRef, ViewChild } from '@angular/core';
import { trigger, style, transition, animate} from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';
import { DdsNotificationDirective } from '../dds-notification.directive';
import { DdsNotificationComponent } from '../dds-notification.component';
import { NotificationType } from '../../../services/notification/dds-notification.service';



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
    @Input() maxSize = 4;
    @Input() position: string;

    itemId = 0;
    queue: any[] = [];

    @ViewChild(DdsNotificationDirective) notificationItem: DdsNotificationDirective;

    add(type: NotificationType) {
        if (this.queue.length === this.maxSize) {
            const value = this.queue.shift();
            value.view.destroy();
            this.clearInterval(value.timeout);
        }

        const config: DdsNotificationComponent = new DdsNotificationComponent(!!type.message.timeout, 0, false);
        const viewRef: ViewRef = this.notificationItem.show(type, config);

        const id = this.itemId++;
        let timeoutFunc: any;
        if (type.message.timeout) {
            let currentTime = 0;
            config.percent = 0;
            timeoutFunc = setInterval(() => {
                if (currentTime >= type.message.timeout) {
                    config.percent = 100;
                    const item = this.queue.find((queue: any) => queue.id === id);
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

   public clearItem(item: any) {
        item.view.destroy();
        this.clearInterval(item.timeout);
    }

   public clearInterval(interval: any) {
        try {
            clearInterval(interval);
        } catch (e) {}
    }
}

