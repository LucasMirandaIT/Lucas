import { InfoGroupComponent } from './info-group.component';

describe('InfoGroupComponent', () => {
    const component = new InfoGroupComponent(null, null, null);

    it ('test variables', () => {
        expect(component.grupo).toBe(null);
    });

});
