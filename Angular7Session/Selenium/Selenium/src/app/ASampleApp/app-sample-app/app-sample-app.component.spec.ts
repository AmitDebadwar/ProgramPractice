import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSampleAppComponent } from './app-sample-app.component';

describe('AppSampleAppComponent', () => {
  let component: AppSampleAppComponent;
  let fixture: ComponentFixture<AppSampleAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSampleAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSampleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
