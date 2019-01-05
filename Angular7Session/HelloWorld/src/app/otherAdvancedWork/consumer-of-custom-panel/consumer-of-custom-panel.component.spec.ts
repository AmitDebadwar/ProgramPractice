import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerOfCustomPanelComponent } from './consumer-of-custom-panel.component';

describe('ConsumerOfCustomPanelComponent', () => {
  let component: ConsumerOfCustomPanelComponent;
  let fixture: ComponentFixture<ConsumerOfCustomPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerOfCustomPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerOfCustomPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
