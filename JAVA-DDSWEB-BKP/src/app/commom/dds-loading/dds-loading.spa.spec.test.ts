import { Router } from '@angular/router';
import { DdsAjaxLoadingComponent } from './dds-ajax-loading.component';
import { DdsPageLoadingComponent } from './dds-page-loading.component';

describe('DdsAjaxLoadingComponent', () => {
    const component = new DdsAjaxLoadingComponent(null);

    it ('test Variables ', () => {
        expect(component._subscriptions.length).toBe(0);
        expect(component.ajaxLoading).toBe(false);
    });

    it ('ngOnDestroy ', () => {
        component.ngOnDestroy();
    });
});

describe('DdsPageLoadingComponent', () => {
    const component = new DdsPageLoadingComponent();

    it ('test Variables ', () => {
        expect(component.label).toBeUndefined();
        expect(component.color).toBeUndefined();
    });

});

