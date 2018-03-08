import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGroupsComponent } from './saved-groups.component';

describe('SavedGroupsComponent', () => {
  let component: SavedGroupsComponent;
  let fixture: ComponentFixture<SavedGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
