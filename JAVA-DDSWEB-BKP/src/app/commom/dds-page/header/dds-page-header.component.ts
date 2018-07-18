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
