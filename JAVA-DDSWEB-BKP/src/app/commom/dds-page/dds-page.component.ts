import { ViewEncapsulation, Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dds-page',
    template: `
    <div [class.page-blur]="blurClass">
        <dds-ajax-loading ></dds-ajax-loading>
        <ng-content select="dds-page-header"></ng-content>
        <ng-content select="dds-page-body"></ng-content>
    </div>
    `,
    styleUrls: ['dds-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DdsPageComponent {
    @Input() blurClass;
}
