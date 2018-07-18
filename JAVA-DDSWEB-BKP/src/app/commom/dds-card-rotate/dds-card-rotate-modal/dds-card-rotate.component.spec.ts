import { DdsCardRotateModalComponent } from './dds-card-rotate-modal.component';

describe('DdsCardRotateModalComponent', () => {
  const component = new DdsCardRotateModalComponent(null, null);

  it ('test variables', () => {
    expect(component.numeroPeticao).toBe(null);
    expect(component.version[0].release).toBe(null);
  });

  it ('test variables', () => {
    component.changeRelease(true);
    component.changeRelease(false);
  });

});
