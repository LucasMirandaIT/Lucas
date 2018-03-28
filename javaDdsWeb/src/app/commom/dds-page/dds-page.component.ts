import { ViewEncapsulation, Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dds-page-header',
    template: `
        <ng-content></ng-content>
    `,
    encapsulation: ViewEncapsulation.None
})
export class DdsPageHeaderComponent {
}

@Component({
    moduleId: module.id,
    selector: 'dds-page-body',
    template: `
        <dds-ajax-loading></dds-ajax-loading>
        <div class="dds-page-body-content">
            <ng-content></ng-content>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.dds-page-content-mode-full]': 'mode == \'full\''
    }
})
export class DdsPageBodyComponent {
    @Input() mode: 'default' | 'full' = 'default';
}

@Component({
    moduleId: module.id,
    selector: 'dds-page',
    template: `
        <ng-content select="dds-page-header"></ng-content>
        <ng-content select="dds-page-body"></ng-content>
    `,
    styleUrls: ['dds-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DdsPageComponent {
}
