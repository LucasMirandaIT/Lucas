import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesTurnComponent } from './modules-turn.component';

describe('ModulesTurnComponent', () => {
  let component: ModulesTurnComponent;
  let fixture: ComponentFixture<ModulesTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
