import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutput2Component } from './input-output2.component';

describe('InputOutput2Component', () => {
  let component: InputOutput2Component;
  let fixture: ComponentFixture<InputOutput2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutput2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
