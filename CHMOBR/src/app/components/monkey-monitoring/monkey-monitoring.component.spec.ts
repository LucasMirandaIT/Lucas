import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyMonitoringComponent } from './monkey-monitoring.component';

describe('MonkeyMonitoringComponent', () => {
  let component: MonkeyMonitoringComponent;
  let fixture: ComponentFixture<MonkeyMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
