import { DdsFormColumnComponent } from './dds-form-column.component';

describe ('DdsFormColumn', () => {
    const component = new DdsFormColumnComponent;

    it ('test variables', () => {
        expect(component._weight).toBe(0);
        expect(component._width).toBeUndefined();
        expect(component.widthSize).toBe('auto');
    });

    it ('test variables', () => {
        this._weight = -1;
        component.ngOnInit();
    });


});
