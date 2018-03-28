import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dds-sidenav',
  templateUrl: 'dds-sidenav.component.html',
  styleUrls: ['dds-sidenav.component.scss'],
})
export class DdsSidenavComponent {
  mode = new FormControl('over');
  private _show: boolean = false;
  
  @Input() lado: 'end' | 'start' = 'end';
  @Input() get show(): boolean {
      return this._show;
  }

    @Output() showChange: EventEmitter<any> = new EventEmitter();

    set show(val: boolean) {
      this._show = val;
      this.showChange.emit(val);
  }

  changes(e:any) {
    this.show = e;
  }

}
