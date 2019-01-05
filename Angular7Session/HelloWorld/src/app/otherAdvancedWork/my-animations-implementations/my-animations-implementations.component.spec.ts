import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnimationsImplementationsComponent } from './my-animations-implementations.component';

describe('MyAnimationsImplementationsComponent', () => {
  let component: MyAnimationsImplementationsComponent;
  let fixture: ComponentFixture<MyAnimationsImplementationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAnimationsImplementationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnimationsImplementationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
