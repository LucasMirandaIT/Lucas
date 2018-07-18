import { Component, QueryList, ContentChildren, AfterContentInit, OnDestroy } from '@angular/core';
import { DdsFormColumnComponent } from '../dds-form-column/dds-form-column.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'dds-form-line',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./dds-form-line.component.scss']
})
export class DdsFormLineComponent implements AfterContentInit, OnDestroy {
    _columnsSubscription: Subscription[] = [];

    @ContentChildren(DdsFormColumnComponent) _columns: QueryList<DdsFormColumnComponent>;

    ngAfterContentInit(): void {
        this._columns.changes.subscribe(() => {
            // If the column list changes, remove any previous subscription and recalculate the columns width
            this._removeSubscriptions();
            this.updateColumnsWidth();
            this._subscribeToColumns();
        });
        this.updateColumnsWidth();
        this._subscribeToColumns();
    }

    ngOnDestroy(): void {
        this._removeSubscriptions();
    }

    public updateColumnsWidth() {
        let lineWeight = 0;
        this._columns.forEach((column) => lineWeight += +column.weight > 0 ?  +column.weight : 1);

        this._columns.forEach((column) => {
            Promise.resolve(null).then(() => column.width = (+column.weight > 0 ? +column.weight / lineWeight * 100 : null));
        });
    }

   public _removeSubscriptions() {
        this._columnsSubscription.forEach((sub) => sub.unsubscribe());
        this._columnsSubscription = [];
    }

   public _subscribeToColumns() {
        // Subscript to each column weightChange event, so we can recalculate all weight width's
        this._columns.forEach((column) => {
            const subscribe = column.weightChange.subscribe(() => {
                this.updateColumnsWidth();
            });
            this._columnsSubscription.push(subscribe);
        });
    }
}
