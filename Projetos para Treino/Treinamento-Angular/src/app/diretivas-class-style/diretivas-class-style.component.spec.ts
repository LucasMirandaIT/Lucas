import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasClassStyleComponent } from './diretivas-class-style.component';

describe('DiretivasClassStyleComponent', () => {
  let component: DiretivasClassStyleComponent;
  let fixture: ComponentFixture<DiretivasClassStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasClassStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
