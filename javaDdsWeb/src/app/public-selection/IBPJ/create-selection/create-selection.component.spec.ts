import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSelectionComponent } from './create-selection.component';

describe('CreateSelectionComponent', () => {
  let component: CreateSelectionComponent;
  let fixture: ComponentFixture<CreateSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
