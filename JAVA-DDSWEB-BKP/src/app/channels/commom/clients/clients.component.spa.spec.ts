import { ClientsComponent } from './clients.component';

describe ('Clientes Modal IBPF', () => {
    const component = new ClientsComponent(null, null, null, null, null);

    it ('test variables', () => {
        expect(component.grupo).toBe(null);
        expect(component.agencia).toBeUndefined();
        expect(component.conta).toBeUndefined();
        expect(component.cpf).toBeUndefined();
        expect(component.credencial).toBeUndefined();
        expect(component.channel).toBeUndefined();
        expect(component.isCPF).toBe(true);
        expect(component.grupoDetalhes).toBeUndefined();
        component.grupoDetalhes = null;
        expect(component.cdPublicoSelecionado).toBeUndefined();
    });

    it ('onVoltarParaGrupos', () => {
        component.onVoltarParaGrupos();
    });

});
