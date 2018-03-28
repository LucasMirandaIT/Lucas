import {Injectable} from '@angular/core';
import {DdsNotificationMessage, DdsNotificationButton} from './dds-notification-message';
import {Subject} from 'rxjs/Subject';

export type NotificationTypeList = 'SUCCESS' | 'ERROR' | 'WARN' | 'INFO';
export type NotificationType = {type: NotificationTypeList, message: DdsNotificationMessage};

@Injectable()
export class DdsNotificationService {

    notifications: Subject<NotificationType> = new Subject<NotificationType>();
    actions: Subject<string> = new Subject<string>();

    public success(message: string | DdsNotificationMessage) {
        message = this._adjustMessage(message);
        message.position = message.position ? message.position : 'topCenter';
        message.icon = message.icon ? message.icon : 'check';
        this.show('SUCCESS', message);
    }

    public error(message: string | DdsNotificationMessage) {
        message = this._adjustMessage(message);
        message.icon = message.icon ? message.icon : 'error';
        this.show('ERROR', message);
    }

    public warn(message: string | DdsNotificationMessage) {
        message = this._adjustMessage(message);
        message.icon = message.icon ? message.icon : 'warning';
        this.show('WARN', message);
    }

    public info(message: string | DdsNotificationMessage) {
        message = this._adjustMessage(message);
        message.icon = message.icon ? message.icon : 'info';
        this.show('INFO', message);
    }

    public show(type: NotificationTypeList, message: string | DdsNotificationMessage) {
        message = this._adjustMessage(message);
        let buttons: DdsNotificationButton[] = [];
        if (message.buttons && message.buttons.length > 0) {
            message.buttons.forEach((button) => buttons.push({
                label: button.label,
                action: button.action,
                closeNotification: button.closeNotification == true
            }));
        }

        message.keepOnRouteChange = message.keepOnRouteChange === undefined ? false : message.keepOnRouteChange;

        this.notifications.next({
            type: type,
            message: {
                message: message.message,
                title: message.title,
                icon: message.icon,
                position: message.position ? message.position : 'bottomLeft',
                timeout: !message.timeout || message.timeout === false ? false : (message.timeout === true ? 4000 : message.timeout),
                keepOnRouteChange: !message.keepOnRouteChange || message.keepOnRouteChange === false ? 0 : (message.keepOnRouteChange === true ? -1 : message.keepOnRouteChange),
                onDismiss: message.onDismiss,
                buttons: buttons
            }
        });
    }

    public closeAll() {
        this.actions.next('closeAll');
    }

    private _adjustMessage(message: string | DdsNotificationMessage): DdsNotificationMessage {
        if (typeof message === 'string') {
            message = {
                message: message
            };
        }
        return message;
    }
}
