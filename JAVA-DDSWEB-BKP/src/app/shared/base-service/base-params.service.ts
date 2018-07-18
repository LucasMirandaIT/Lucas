import { Injectable } from '@angular/core';
import { DdsNotificationService } from '../../services/notification/dds-notification.service';

@Injectable()
export class BaseParamsService {

    constructor(public notificationService: DdsNotificationService) {}

}
