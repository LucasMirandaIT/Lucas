import { DdsStepNavigationComponent } from './dds-step-navigation.component';
import { StepOptions } from './step-navigation.model';
import { DdsStepItemComponent } from './dds-step-item.component';

describe('DdsStepNavigationComponent', () => {
  const component = new DdsStepNavigationComponent();
});

describe('DdsStepItemComponent', () => {
  const component = new DdsStepItemComponent();

  it ('test variables', () => {
    expect(component.index).toBe(0);
    expect(component.expand).toBeFalsy();
    expect(component._stepOption.length).toBe(0);
  });

});

describe('StepOptions', () => {
    it ('test variables', () => {
        const options = new StepOptions (1, 'DONE', 'Step', false);
        expect(options.index).toBe(1);
        expect(options.status).toBe('DONE');
        expect(options.titulo).toBe('Step');
        expect(options.expand).toBeFalsy();
        expect(options.isNext).toBeFalsy();
    });
});
