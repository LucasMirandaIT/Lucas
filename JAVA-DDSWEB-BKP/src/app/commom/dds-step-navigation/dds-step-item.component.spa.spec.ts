import { DdsStepItemComponent } from './dds-step-item.component';
import { StepOptions } from './step-navigation.model';

describe('DdsStepItem', () => {
    const component = new DdsStepItemComponent;

    it ('testing onShowDetails()', () => {
        component.onShowDetails();
        expect(StepOptions.length).toBe(4);
        component.stepOption = null;
    });

    // it ('testing onExpand()', () => {
    //     component.onExpand();
    // });
});
