import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNaoEncontradoComponent } from './cliente-nao-encontrado.component';

describe('ClienteNaoEncontradoComponent', () => {
  let component: ClienteNaoEncontradoComponent;
  let fixture: ComponentFixture<ClienteNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
