import { IbpjAmbientMonitoringComponent } from './ibpj-ambient-monitoring.component';

describe ('IbpjAmbientMonitoringComponent', () => {
    const component = new IbpjAmbientMonitoringComponent(null, null, null, null, null);

    it ('test variables', () => {
        // expect(component.modulesLogData.length).toBe(0);
        expect(component.modules.length).toBe(4);
        const date = component.data;
        expect(component.data).toBe(date);
        // expect(component.selectedRd.length).toBe(0);
        expect(component.states.length).toBe(3);

    });

    it ('ngOnInit()', () => {
        component.ngOnInit();
    });

    // it ('openModulesConfig()', () => {
    //     component.openModulesConfig(null, null);
    // });

    // it ('voltarFront()', () => {
    //     component.voltarFront(null);
    // });

    it ('deParaModulo()', () => {
        component.deParaModulo('Módulo 1');
        component.deParaModulo('Módulo 2');
        component.deParaModulo('Módulo 3');
    });

    it ('deParaEstado()', () => {
        component.deParaEstado('Online');
        component.deParaEstado('Offline');
        component.deParaEstado('Forced Offline');
    });


});
