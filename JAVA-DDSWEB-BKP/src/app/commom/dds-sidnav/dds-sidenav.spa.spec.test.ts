import { Router } from '@angular/router';
import { DdsSidenavComponent } from './dds-sidenav.component';

describe('DdsSidenavComponent', () => {
  const component = new DdsSidenavComponent(null);

  it('test variables', () => {
    expect(component.mode.touched).toBe(false);
    // expect(component.userAuth).toBe(undefined);
    expect(component.showFiller).toBe(false);
    expect(component.bal).toBe(undefined);
    // expect(component.hideToggle).toBe(undefined);
  });

  // it('ngOnInit()', () => {
  //   component.ngOnInit();
  // });

  it('mouseEnter()', () => {
    component.mouseEnter();
  });

  it('mouseLeave()', () => {
    component.mouseEnter();
  });

  it('onDestroy()', () => {
    component.mouseEnter();
  });

});
