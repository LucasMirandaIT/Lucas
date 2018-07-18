import { async, ComponentFixture, inject, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { DdsErrorMessagesDirective } from './dds-error-messages.directive';
import { DdsErrorMessagesComponent } from './dds-error-messages.component';

describe('DdsErrorMessagesDirective', () => {
  const componentDds = new DdsErrorMessagesDirective(null);

  beforeEach(async(() => {}));

  afterEach(function() {});

  it('test DdsErrorMessagesDirective inicializado', () => {
      expect(componentDds.error).toBeUndefined();
  });

  it('test dds.type ', () => {
    componentDds.type = 'string';
    const t = componentDds.typesList;
    expect(componentDds.type.length).toBe(1);
  });

  it('test contains() ', () => {
    componentDds.type = 'erro';
    const er = componentDds.contains('erro');
    expect(er).toBeTruthy();
  });

});

describe('DdsErrorMessagesComponent', () => {
  const component = new DdsErrorMessagesComponent();

  it('test variables', () => {
      expect(component._subscriptions.length).toBe(0);
      expect(component.formControl).toBeUndefined();
      expect(component.currentMessage).toBeUndefined();
      expect(component.currentError).toBeUndefined();
  });

  it('test variables', () => {
      component.ngOnDestroy();
  });

  it('mergeMessages', () => {
      // component.mergeMessages();
  });

});
