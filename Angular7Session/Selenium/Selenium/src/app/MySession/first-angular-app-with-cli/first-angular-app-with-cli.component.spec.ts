import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAngularAppWithCliComponent } from './first-angular-app-with-cli.component';

describe('FirstAngularAppWithCliComponent', () => {
  let component: FirstAngularAppWithCliComponent;
  let fixture: ComponentFixture<FirstAngularAppWithCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAngularAppWithCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAngularAppWithCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
