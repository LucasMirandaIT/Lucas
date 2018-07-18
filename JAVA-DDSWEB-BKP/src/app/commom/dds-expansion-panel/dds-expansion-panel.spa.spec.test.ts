import { DdsExpansionPanelComponent } from './dds-expansion-panel.component';
import { Router } from '@angular/router';

describe('DdsExpansionPanelComponent', () => {
  const componentDds = new DdsExpansionPanelComponent(null, null, null);

  it('test variables', () => {
      expect(componentDds.side).toBeUndefined();
      expect(componentDds.column).toBeUndefined();
  });

  it('verifyTransation()', () => {
      componentDds.verifyTransation('ABD', 'ABD', 'ABD');
  });

//   it('navigation', () => {
//       componentDds.navigation('ibpj/public-selection');
//   });

});
