import { IbpjSelectionComponent } from './ibpj-selection.component';
import { StepOptions } from '../../../commom/dds-step-navigation/step-navigation.model';

describe ('IbpjSelectionComponent', () => {
    const component = new IbpjSelectionComponent(null, null, null, null, null, null);

    it ('test variables', () => {
        expect(component.formStatus).toBe(false);
        expect(component.isLeftVisible).toBe(true);
        expect(component.tabelaDetalhesGrupo).toBe(undefined);
        expect(component.moduloAmbienteCanal.length).toBe(0);
    });

    it ('ngOnDestroy', () => {
        component.ngOnDestroy();
    });

});
