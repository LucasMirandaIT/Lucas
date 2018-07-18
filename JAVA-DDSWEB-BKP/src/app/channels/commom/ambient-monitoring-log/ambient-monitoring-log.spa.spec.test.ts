import { AmbientMonitoringLogComponent } from './ambient-monitoring-log.component';

describe ('IbpfAmbientMonitoringLogComponent', () => {
    const component = new AmbientMonitoringLogComponent(null, null);

    it ('test variables', () => {
        expect(component.sortF).toBe(undefined);
        expect(component._data).toBe(undefined);
    });

    it ('changeSort()', () => {
        component.changeSort(false);
    });

});
