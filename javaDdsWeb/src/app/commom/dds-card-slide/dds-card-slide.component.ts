import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'dds-card-slide',
  styleUrls: [ './dds-card-slide.component.scss' ],
  templateUrl: './dds-card-slide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
//   animations: [
        // trigger('slide', [
        //     state('left', style({transform: 'translateX(0)'})),
        //     state('right', style({transform: 'translateX(-50%)'})),
        //     transition('* => left, * => right, left => center, right => center',
        //         animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
            
        //   ])
//   ]
})
export class DdsCardSlildeComponent {
  @Input() activePane: boolean = true;
  @Input() titulo: string = '';
  
}