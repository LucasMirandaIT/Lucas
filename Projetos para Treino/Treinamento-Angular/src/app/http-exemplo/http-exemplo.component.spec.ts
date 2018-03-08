import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpExemploComponent } from './http-exemplo.component';

describe('HttpExemploComponent', () => {
  let component: HttpExemploComponent;
  let fixture: ComponentFixture<HttpExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
