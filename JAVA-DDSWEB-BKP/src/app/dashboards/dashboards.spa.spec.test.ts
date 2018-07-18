import { DashboardsComponent } from './dashboards.component';

describe ('DashboardsComponent', () => {
    const component = new DashboardsComponent ();

    it ('test variables', () => {
        const data = component.data;
        expect(component.data).toBe(data);
        expect(component.aux).toBe(undefined);
        expect(component.dados).toBe(undefined);
        expect(component.channelDatas.length).toBe(6);
        expect(component.channelDatas2.length).toBe(6);
    });

    it ('Verify()', () => {
        component.verify(10);
        component.verify(0);
        component.ngOnInit();
        component.timeout();
    });
});
