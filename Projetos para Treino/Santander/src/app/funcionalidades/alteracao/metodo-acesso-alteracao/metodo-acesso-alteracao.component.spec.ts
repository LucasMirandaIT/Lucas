import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoAcessoAlteracaoComponent } from './metodo-acesso-alteracao.component';

describe('MetodoAcessoAlteracaoComponent', () => {
  let component: MetodoAcessoAlteracaoComponent;
  let fixture: ComponentFixture<MetodoAcessoAlteracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoAcessoAlteracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoAcessoAlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
