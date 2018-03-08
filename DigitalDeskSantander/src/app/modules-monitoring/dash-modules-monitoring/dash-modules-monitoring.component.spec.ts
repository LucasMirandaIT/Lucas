import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashModulesMonitoringComponent } from './dash-modules-monitoring.component';

describe('DashModulesMonitoringComponent', () => {
  let component: DashModulesMonitoringComponent;
  let fixture: ComponentFixture<DashModulesMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashModulesMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashModulesMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
