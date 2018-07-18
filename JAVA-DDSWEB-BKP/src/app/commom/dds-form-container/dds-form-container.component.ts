import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dds-form-container',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./dds-form-container.component.scss']
})
export class DdsFormContainerComponent {
}
