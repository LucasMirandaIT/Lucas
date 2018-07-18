import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'dds-card-slide',
  styleUrls: [ './dds-card-slide.component.scss' ],
  templateUrl: './dds-card-slide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DdsCardSlideComponent {

  @Input() activePane = true;
  @Input() backWhite = false;
  @Input() titulo;

}
