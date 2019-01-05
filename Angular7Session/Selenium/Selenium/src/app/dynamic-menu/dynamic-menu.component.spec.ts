import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMenuComponent } from './dynamic-menu.component';

describe('DynamicMenuComponent', () => {
  let component: DynamicMenuComponent;
  let fixture: ComponentFixture<DynamicMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
