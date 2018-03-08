import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoAcessoSelecaoComponent } from './metodo-acesso-selecao.component';

describe('MetodoAcessoSelecaoComponent', () => {
  let component: MetodoAcessoSelecaoComponent;
  let fixture: ComponentFixture<MetodoAcessoSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoAcessoSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoAcessoSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
