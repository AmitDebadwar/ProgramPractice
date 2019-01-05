import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormForMyAppComponent } from './template-driven-form-for-my-app.component';

describe('TemplateDrivenFormForMyAppComponent', () => {
  let component: TemplateDrivenFormForMyAppComponent;
  let fixture: ComponentFixture<TemplateDrivenFormForMyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormForMyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormForMyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
