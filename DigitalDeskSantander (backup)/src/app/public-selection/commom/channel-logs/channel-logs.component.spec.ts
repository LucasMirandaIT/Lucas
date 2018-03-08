import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelLogsComponent } from './channel-logs.component';

describe('ChannelLogsComponent', () => {
  let component: ChannelLogsComponent;
  let fixture: ComponentFixture<ChannelLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
