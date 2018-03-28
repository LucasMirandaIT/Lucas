import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dds-form-column',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./form-column.component.scss'],
    host: {
        '[style.min-width]': 'widthSize',
        '[class.dds-responsive]': 'responsive'
    }
})
export class DdsFormColumnComponent implements OnInit {
    private _width: number;
    private widthSize: string = 'auto';
    private _weight: number = 0;

    @Input() responsive: boolean = true;
    @Input() get weight() {
        return this._weight;
    };
    set weight(value: number) {
        this._weight = value;
        this.weightChange.emit(this._weight);
    }

    @Output() weightChange: EventEmitter<number> = new EventEmitter<number>();

    public set width(width: number) {
        this._width = width;
        this.widthSize = this.width ? 'calc(' + this.width + '% - 20px)' : 'auto';
    };

    public get width() {
        return this._width;
    }

    ngOnInit(): void {
        if (this.weight < 0) {
            throw new Error('weight must be greater than 0');
        }
    }
}
