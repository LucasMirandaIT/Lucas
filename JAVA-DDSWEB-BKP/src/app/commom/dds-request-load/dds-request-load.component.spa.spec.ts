import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsRequestLoadComponent } from './dds-request-load.component';

describe('DdsRequestLoadComponent', () => {
  let component: DdsRequestLoadComponent;
  let fixture: ComponentFixture<DdsRequestLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdsRequestLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdsRequestLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
