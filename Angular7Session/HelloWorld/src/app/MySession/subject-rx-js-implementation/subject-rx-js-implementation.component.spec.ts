import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRxJsImplementationComponent } from './subject-rx-js-implementation.component';

describe('SubjectRxJsImplementationComponent', () => {
  let component: SubjectRxJsImplementationComponent;
  let fixture: ComponentFixture<SubjectRxJsImplementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectRxJsImplementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectRxJsImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
