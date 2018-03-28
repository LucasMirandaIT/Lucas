import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSelectionComponent } from './public-selection.component';

describe('PublicSelectionComponent', () => {
  let component: PublicSelectionComponent;
  let fixture: ComponentFixture<PublicSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
