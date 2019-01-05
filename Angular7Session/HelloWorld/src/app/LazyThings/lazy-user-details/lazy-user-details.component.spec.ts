import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyUserDetailsComponent } from './lazy-user-details.component';

describe('LazyUserDetailsComponent', () => {
  let component: LazyUserDetailsComponent;
  let fixture: ComponentFixture<LazyUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
