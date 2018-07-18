import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DdsNotificationDirective } from './dds-notification.directive';
import { DdsNotificationItemComponent } from './item/dds-notification-item.component';
import { DdsNotificationQueueComponent } from './queue/dds-notification-queue.component';
import { DdsNotificationAreaComponent } from './area/dds-notification-area.component';

const COMPONENTS = [
    DdsNotificationDirective,
    DdsNotificationItemComponent,
    DdsNotificationQueueComponent,
    DdsNotificationAreaComponent
];

@NgModule({
    imports: [CommonModule, MatIconModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DdsNotificationModule {}

export * from './dds-notification.component';
