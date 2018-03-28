import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbpjComponent } from './ibpj.component';

describe('IbpjComponent', () => {
  let component: IbpjComponent;
  let fixture: ComponentFixture<IbpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbpjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
