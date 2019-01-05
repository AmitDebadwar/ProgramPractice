import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AIPipesComponent } from './aipipes.component';

describe('AIPipesComponent', () => {
  let component: AIPipesComponent;
  let fixture: ComponentFixture<AIPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
