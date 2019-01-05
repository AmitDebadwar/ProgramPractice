import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationAndTwoWayDataBindingComponent } from './interpolation-and-two-way-data-binding.component';

describe('InterpolationAndTwoWayDataBindingComponent', () => {
  let component: InterpolationAndTwoWayDataBindingComponent;
  let fixture: ComponentFixture<InterpolationAndTwoWayDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationAndTwoWayDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationAndTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
