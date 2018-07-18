import { Router } from '@angular/router';
import { DdsModalComponent } from './dds-modal.component';

describe('DdsModalComponent', () => {
  const component = new DdsModalComponent(null, null);

  it ('test variables', () => {
    expect(component.htmlContent).toBe(undefined);
  });

  // it ('test confirm()', () => {
  //   component.confirm(true);
  //   component.confirm(false);
  // });

});
