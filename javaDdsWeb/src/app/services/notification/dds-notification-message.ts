export type NotificationPos = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'Center' | 'topLeft' | 'topCenter' | 'topRight';

export class DdsNotificationButton {
    label: string;
    action: () => void;
    closeNotification?: boolean;
}

export class DdsNotificationMessage {
    message: string;
    title?: string;
    icon?: string;
    position?: NotificationPos;
    timeout?: boolean | number;
    keepOnRouteChange?: boolean | number;
    onDismiss?: (automatic: boolean) => void;
    buttons?: DdsNotificationButton[];
}
