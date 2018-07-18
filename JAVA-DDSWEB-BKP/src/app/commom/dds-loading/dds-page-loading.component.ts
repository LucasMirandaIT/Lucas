import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dds-page-loading',
    template: `
        <div class="loading-center">
            <div class="loading-center-absolute">
                <div class="object object_four"></div>
                <div class="object object_three"></div>
                <div class="object object_two"></div>
                <div class="object object_one"></div>
            </div>
        </div>
        <div class="label" *ngIf="label">{{label}}</div>
    `,
    styleUrls: ['./dds-page-loading.component.scss'],
    host: {
        '[class.dds-primary]': 'color == "primary"',
        '[class.dds-accent]': 'color == "accent"',
        '[class.dds-warn]': 'color == "warn"'
    }
})
export class DdsPageLoadingComponent {

    @Input() label: string;
    @Input() color: 'primary' | 'accent' | 'warn' | null;

}
