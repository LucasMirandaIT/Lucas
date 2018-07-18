import { DdsCardSlideComponent } from './dds-card-slide.component';

describe('DdsCardSlideComponent', () => {
  const component = new DdsCardSlideComponent();

  it('test variables', () => {
      expect(component.activePane).toBe(true);
      expect(component.backWhite).toBe(false);
      expect(component.titulo).toBeUndefined();
  });

});
