import { Component, OnDestroy, ViewRef, ViewContainerRef, TemplateRef, Directive } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DdsNotificationComponent } from './dds-notification.component';
import { NotificationType } from '../../services/notification/dds-notification.service';

@Directive({
    selector: '[ddsNotificationItem]'
})
export class DdsNotificationDirective implements OnDestroy {

    constructor(private viewContainer: ViewContainerRef,
               public templateRef: TemplateRef<{notification: NotificationType, config: DdsNotificationComponent, destroy: Function}>) {}

    show(notification: NotificationType, config: DdsNotificationComponent): ViewRef {
        const view = this.viewContainer.createEmbeddedView(this.templateRef, {
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
