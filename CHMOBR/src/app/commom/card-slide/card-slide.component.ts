import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card-slide',
  styleUrls: [ './card-slide.component.scss' ],
  templateUrl: './card-slide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSlideComponent {

  @Input() activePane = true;
  @Input() backWhite = false;
  @Input() titulo;

}
