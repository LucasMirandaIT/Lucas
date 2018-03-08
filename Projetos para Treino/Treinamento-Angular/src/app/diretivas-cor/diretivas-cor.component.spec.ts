import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCorComponent } from './diretivas-cor.component';

describe('DiretivasCorComponent', () => {
  let component: DiretivasCorComponent;
  let fixture: ComponentFixture<DiretivasCorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasCorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
