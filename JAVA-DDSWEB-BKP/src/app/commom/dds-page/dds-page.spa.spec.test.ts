import { DdsHeaderToolbarActionComponent } from './header/dds-header-toolbar-action.component';
import { DdsPageBodyComponent } from './body/dds-page-body.component';
import { DdsPageHeaderComponent } from './header/dds-page-header.component';

describe ('DdsHeaderToolbarActionComponent', () => {
    const component = new DdsHeaderToolbarActionComponent();

    it('test variables', () => {
        expect(component.value).toBe(undefined);
        expect(component.icon).toBe(undefined);
        expect(component.type).toBe(undefined);
        expect(component.form).toBe(undefined);
        expect(component.disabled).toBe(undefined);
    });

    it('focus ()', () => {
        component.focus();
    });
});

describe ('DdsPageBodyComponent', () => {
    const component = new DdsPageBodyComponent();

    it('test variables', () => {
        expect(component.mode).toBe('default');
    });
});

describe ('DdsPageHeaderComponent', () => {
    const component = new DdsPageHeaderComponent();
});






