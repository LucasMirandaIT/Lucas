import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyPanelComponent } from './monkey-panel.component';

describe('MonkeyPanelComponent', () => {
  let component: MonkeyPanelComponent;
  let fixture: ComponentFixture<MonkeyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
