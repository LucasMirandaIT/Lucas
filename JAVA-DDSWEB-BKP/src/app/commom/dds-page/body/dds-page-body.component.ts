import { ViewEncapsulation, Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dds-page-body',
    template: `
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
