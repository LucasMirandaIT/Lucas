import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CustomHttpEventObserverService } from '../../shared/base-service/custom-http-event-observer.service';

@Component({
    moduleId: module.id,
    selector: 'dds-ajax-loading',
    template: `
        <mat-progress-bar
            color="accent"
            mode="indeterminate">
        </mat-progress-bar>
    `,
    styleUrls: ['dds-ajax-loading.component.scss'],
    host: {
        '[class.dds-visible]': 'ajaxLoading'
    }
})
export class DdsAjaxLoadingComponent implements OnInit, OnDestroy {
   public _subscriptions: Subscription[] = [];
   public ajaxLoading = false;

    constructor(private _httpEvent: CustomHttpEventObserverService) {
    }

    ngOnInit(): void {
        // FIXME - Make it work with multiple requests
        this._subscriptions.push(this._httpEvent.beforeRequest.subscribe(() => this.ajaxLoading = true));
        this._subscriptions.push(this._httpEvent.afterRequest.subscribe(() => this.ajaxLoading = false));
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
