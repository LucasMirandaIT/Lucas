import { DdsNotificationComponent } from './dds-notification.module';
import { DdsNotificationAreaComponent } from './area/dds-notification-area.component';
import { DdsNotificationItemComponent } from './item/dds-notification-item.component';
import { DdsNotificationQueueComponent } from './queue/dds-notification-queue.component';
import { DdsNotificationDirective } from './dds-notification.directive';

describe ('DdsNotificationComponent', () => {
    const component = new DdsNotificationComponent();
    const componentOne = new DdsNotificationAreaComponent(null, null);
    const componentTwo = new DdsNotificationItemComponent();
    const componentThree = new DdsNotificationQueueComponent();
    const componentFour = new DdsNotificationDirective(null, null);

    it ('DdsNotificationQueueComponent Variables', () => {
        expect(componentThree.itemId).toBe(0);
        expect(componentThree.queue.length).toBe(0);
        expect(componentThree.maxSize).toBe(4);
        expect(componentThree.position).toBeUndefined();
    });

    it ('DdsNotificationAreaComponent ngOnDestroy()', () => {
        componentOne.ngOnDestroy();
    });

});
