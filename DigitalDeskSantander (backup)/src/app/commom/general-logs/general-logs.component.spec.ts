import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLogsComponent } from './general-logs.component';

describe('GeneralLogsComponent', () => {
  let component: GeneralLogsComponent;
  let fixture: ComponentFixture<GeneralLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
