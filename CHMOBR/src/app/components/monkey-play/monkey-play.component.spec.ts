import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyPlayComponent } from './monkey-play.component';

describe('MonkeyPlayComponent', () => {
  let component: MonkeyPlayComponent;
  let fixture: ComponentFixture<MonkeyPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
