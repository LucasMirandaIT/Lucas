import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedFiltersComponent } from './predefined-filters.component';

describe('PredefinedFiltersComponent', () => {
  let component: PredefinedFiltersComponent;
  let fixture: ComponentFixture<PredefinedFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinedFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
