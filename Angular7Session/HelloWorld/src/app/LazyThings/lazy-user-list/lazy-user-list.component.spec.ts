import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyUserListComponent } from './lazy-user-list.component';

describe('LazyUserListComponent', () => {
  let component: LazyUserListComponent;
  let fixture: ComponentFixture<LazyUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
