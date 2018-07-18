import { GroupsComponent } from './groups.component';
import { Grupos } from '../../../model/grupoTableEdicao.model';

describe('GroupsComponent', () => {
    const component = new GroupsComponent(null, null, null, null, null, null);

    it ('test variables', () => {
        expect(component.groupAtivo).toBe(null);
        expect(component.verDetalhes).toBe(true);
        expect(component.tabelaDetalhesGrupo).toBe(undefined);
        expect(component.grupoTableEdicao.length).toBe(0);
        expect(component.cdCanal).toBe(undefined);
        expect(component.voltar).toBe(undefined);
    });

    it ('ngOnInit()', () => {
        component.ngOnInit();
    });

    // it ('detalhesDoGrupo()', () => {
    //     const temp: Grupos = new Grupos();
    //     temp.operacoes = true;
    //     component.detalhesDoGrupo(temp);
    // });

});
