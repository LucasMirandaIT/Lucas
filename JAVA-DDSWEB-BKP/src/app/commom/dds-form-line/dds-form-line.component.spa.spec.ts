import { DdsFormLineComponent } from './dds-form-line.component';

describe('DdsFormLineComponent', () => {
  const dds = new DdsFormLineComponent();

  it('test variables', () => {
      expect(dds._columnsSubscription.length).toBe(0);
  });

  it('test ngOnDestroy()', () => {
      dds.ngOnDestroy();
  });

  it('test _removeSubscriptions()', () => {
      dds._removeSubscriptions();
  });


});
