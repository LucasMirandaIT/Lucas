import { IbpfSelectionComponent } from './ibpf-selection.component';
import { StepOptions } from '../../../commom/dds-step-navigation/step-navigation.model';
import { ModuloAmbienteCanal } from '../../../model/moduloAmbienteCanal.model';
import { GrupoSelecao } from '../../../model/grupoSelecao.model';
import { GroupPublicSelection } from '../../../model/groupPublicSelection.model';
import { DataCreate } from '../../../model/dataCreate.model';
import { GrupoTableEdicao } from '../../../model/grupoTableEdicao.model';

describe ('IbpfSelectionComponent', () => {
    const component = new IbpfSelectionComponent(null, null, null, null, null, null);
    const moduloAmbienteCanal: ModuloAmbienteCanal = new ModuloAmbienteCanal();
    const grupoSelecao: GrupoSelecao = new GrupoSelecao();
    const groupPublicSelection: GroupPublicSelection = new GroupPublicSelection(1, '111111', 'dfsdsd', 'N', 'N', null);
    const groupPublicSelectionDois: GroupPublicSelection = new GroupPublicSelection(1, '111111', 'dfsdsd', 'S', 'S', null);
    const listaTableClientes: DataCreate = new DataCreate();
    const grupoTableEdicao: GrupoTableEdicao = new GrupoTableEdicao('dddd', 'sfsds', 'ddddd', 'N', 'N', 1, 2, 3, 'ddd', 1, 1);
    const grupoTableEdicaoDois: GrupoTableEdicao = new GrupoTableEdicao('dddd', 'sfsds', 'ddddd', 'S', 'S', 1, 2, 3, 'ddd', 1, 1);

    it ('test variables', () => {
        expect(component.formStatus).toBe(false);
        expect(component.isLeftVisible).toBe(true);
        expect(component.tabelaDetalhesGrupo).toBe(undefined);
        expect(component.moduloAmbienteCanal.length).toBe(0);

        expect(component.cdCanal).toBe(undefined);
        expect(component.indexTab).toBe(0);
        expect(component.verDetalhes).toBe(true);
        expect(component.grupoTableEdicao.length).toBe(0);
        expect(component.grupos).toBe(null);
        expect(component.groupAtivo).toBe(null);
        expect(component.subscriptions.length).toBe(0);
        expect(component.valid).toBe(false);
        expect(component.grupoSelecao.cdCredential).toBe(undefined);
        expect(component.groupPublicSelection.indAtivo).toBe('N');
        expect(component.groupPublicSelectionClient).toBe(null);
        expect(component.Step.length).toBe(0);
        expect(component.showTable).toBe(false);
        expect(component.listaTableClientes.length).toBe(0);
        expect(component.nmGrupoSelecao).toBe(undefined);
        expect(component.numeroRemedyPeticao).toBe(undefined);
        expect(component.cdModuloAmbiente).toBe(undefined);
        expect(component.sortF).toBe(undefined);
    });

    it ('ngOnDestroy', () => {
        component.ngOnDestroy();
    });

    it ('removeMask', () => {
        const grupoSelecaoUm: GrupoSelecao = new GrupoSelecao();
        grupoSelecaoUm.publicoSelecionadoInclude.push(new GroupPublicSelection(
            null, '111111', null, 'N', 'N', null
        ));
        component.removeMask();
        component.removeMask();
    });

    it ('changeTab', () => {
        component.changeTab();
    });

});
