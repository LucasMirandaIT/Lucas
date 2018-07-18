import { DdsMaskDirective } from './dds-mask.directive';

describe ('DdsMaskDirective variables', () => {
    const component = new DdsMaskDirective (null, null);

    it('testing switch CPF', () => {
        component.ddsMask = 'CPF';
        component.convertMask();
        expect(component.convertedMask).toBe('999.999.999-99');
    });
    it('testing switch AGENCIA', () => {
        component.ddsMask = 'AGENCIA';
        component.convertMask();
        expect(component.convertedMask).toBe('9999');
    });
    it('testing switch CONTA', () => {
        component.ddsMask = 'CONTA';
        component.convertMask();
        expect(component.convertedMask).toBe('9999999');
    });
    it('testing switch CNPJ', () => {
        component.ddsMask = 'CNPJ';
        component.convertMask();
        expect(component.convertedMask).toBe('99.999.999/9999-99');
    });
    it('testing switch PIS', () => {
        component.ddsMask = 'PIS';
        component.convertMask();
        expect(component.convertedMask).toBe('999.9999.999-9');
    });
    it('testing switch TELEFONE-FIXO', () => {
        component.ddsMask = 'TELEFONE-FIXO';
        component.convertMask();
        expect(component.convertedMask).toBe('(99) 9999-9999');
    });
    it('testing switch TELEFONE-CELULAR', () => {
        component.ddsMask = 'TELEFONE-CELULAR';
        component.convertMask();
        expect(component.convertedMask).toBe('(99) 9999-9999?9');
    });
    it('testing switch CEP', () => {
        component.ddsMask = 'CEP';
        component.convertMask();
        expect(component.convertedMask).toBe('99999-999');
    });
    it('testing switch DATE', () => {
        component.ddsMask = 'DATE';
        component.convertMask();
        expect(component.convertedMask).toBe('99/99/9999');
    });
    it('testing switch TIME', () => {
        component.ddsMask = 'TIME';
        component.convertMask();
        expect(component.convertedMask).toBe('99:99:99');
    });
    it('testing switch DATE-TIME', () => {
        component.ddsMask = 'DATE-TIME';
        component.convertMask();
        expect(component.convertedMask).toBe('99/99/9999 99:99:99');
    });
});