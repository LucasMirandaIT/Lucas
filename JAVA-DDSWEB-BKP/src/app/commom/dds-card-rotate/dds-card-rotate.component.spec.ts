import { DdsCardRotateComponent } from './dds-card-rotate.component';

describe('DdsCardRotateComponent', () => {
  const component = new DdsCardRotateComponent(null, null);

  it ('test variables', () => {
    expect(component.title).toBe(undefined);
    expect(component.flippedCard).toBe(undefined);
    expect(component.version).toBe(undefined);
    expect(component.alterou).toBe(undefined);
  });

  it ('flippedCard()', () => {
    component.flippedCard = null;
  });

  it ('version()', () => {
    component.version = null;
  });

  it ('alterou()', () => {
    component.alterou = null;
  });

  it ('change()', () => {
    component.change = null;
  });

});
