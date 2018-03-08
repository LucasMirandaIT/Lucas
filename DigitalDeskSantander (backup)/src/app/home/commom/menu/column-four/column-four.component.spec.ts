import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnFourComponent } from './column-four.component';

describe('ColumnFourComponent', () => {
  let component: ColumnFourComponent;
  let fixture: ComponentFixture<ColumnFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
