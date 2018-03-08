import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostoComponent } from './imposto.component';

describe('ImpostoComponent', () => {
  let component: ImpostoComponent;
  let fixture: ComponentFixture<ImpostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
