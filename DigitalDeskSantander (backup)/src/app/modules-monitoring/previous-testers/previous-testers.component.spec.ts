import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTestersComponent } from './previous-testers.component';

describe('PreviousTestersComponent', () => {
  let component: PreviousTestersComponent;
  let fixture: ComponentFixture<PreviousTestersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousTestersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousTestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
