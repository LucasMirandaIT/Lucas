import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSelection2Component } from './create-selection2.component';

describe('CreateSelection2Component', () => {
  let component: CreateSelection2Component;
  let fixture: ComponentFixture<CreateSelection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSelection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSelection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
