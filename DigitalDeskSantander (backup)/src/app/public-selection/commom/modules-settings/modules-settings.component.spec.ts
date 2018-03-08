import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesSettingsComponent } from './modules-settings.component';

describe('ModulesSettingsComponent', () => {
  let component: ModulesSettingsComponent;
  let fixture: ComponentFixture<ModulesSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
