// import { 
//     Component,
//     OnInit,
//     OnDestroy,
//     ViewContainerRef,
//     TemplateRef,
//     ViewChild,
//     Directive,
//     Input,
//     EventEmitter,
//     Output,
//     ViewEncapsulation,
//     ViewChildren,
//     QueryList,
//     ViewRef
// } from '@angular/core';
// import { trigger, style, transition, animate} from '@angular/animations';
// import { Subscription } from 'rxjs/Subscription';
// import { Router, NavigationEnd } from '@angular/router';
// import { NotificationType, DdsNotificationButton, DdsNotificationService } from '../../services/notification';

export class DdsNotificationComponent {
    constructor(public hasTimer = false, public percent = 0, public automaticClosed = false) {}
}

