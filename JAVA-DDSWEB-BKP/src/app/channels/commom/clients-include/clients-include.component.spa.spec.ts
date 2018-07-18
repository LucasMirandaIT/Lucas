import { async, ComponentFixture, inject, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ClientsIncludeComponent } from './clients-include.component';

describe('ClientsIncludeComponent', () => {
    const component = new ClientsIncludeComponent(null, null, null);

    it ('test variables', () => {
        expect(component.credencial).toBe(undefined);
        expect(component.agencia).toBe(undefined);
        expect(component.conta).toBe(undefined);
        expect(component.retorno).toBe(undefined);
    });

});
