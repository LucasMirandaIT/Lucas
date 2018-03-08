import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnThreeComponent } from './column-three.component';

describe('ColumnThreeComponent', () => {
  let component: ColumnThreeComponent;
  let fixture: ComponentFixture<ColumnThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
