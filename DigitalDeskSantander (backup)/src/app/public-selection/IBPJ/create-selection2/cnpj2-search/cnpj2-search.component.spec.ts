import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnpj2SearchComponent } from './cnpj2-search.component';

describe('Cnpj2SearchComponent', () => {
  let component: Cnpj2SearchComponent;
  let fixture: ComponentFixture<Cnpj2SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cnpj2SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cnpj2SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
