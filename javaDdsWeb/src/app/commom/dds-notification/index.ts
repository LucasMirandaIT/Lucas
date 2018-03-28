import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    DdsNotificationItemDirective, DdsNotificationItemComponent,
    DdsNotificationQueueComponent, DdsNotificationAreaComponent
} from './dds-notification.component';

import {MatIconModule} from '@angular/material/icon';

let COMPONENTS = [
    DdsNotificationItemDirective,
    DdsNotificationItemComponent,
    DdsNotificationQueueComponent,
    DdsNotificationAreaComponent
];

@NgModule({
    imports: [CommonModule,MatIconModule],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DdsNotificationModule {}

export * from './dds-notification.component';
