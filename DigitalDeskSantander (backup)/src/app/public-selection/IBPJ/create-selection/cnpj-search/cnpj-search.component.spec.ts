import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnpjSearchComponent } from './cnpj-search.component';

describe('CnpjSearchComponent', () => {
  let component: CnpjSearchComponent;
  let fixture: ComponentFixture<CnpjSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnpjSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnpjSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
