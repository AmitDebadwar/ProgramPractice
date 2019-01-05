import { ElementRef, DebugElement, Component } from '@angular/core';
import { PhoneNumberFormatDirective } from './phone-number-format.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: "<input type='text' id='m' appPhoneNumberFormat>"
})
class TestHoverFocusComponent {

}



describe('PhoneNumberFormatDirective Testing', () => {

  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let component: TestHoverFocusComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHoverFocusComponent, PhoneNumberFormatDirective]
    });

    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;


  });

  it('should format a number', () => {

    let el = fixture.debugElement.query(By.css('input[id=m]'));
    let s: HTMLInputElement = el.nativeElement;
    s.value = "9096174175";

    el.triggerEventHandler('keyup', null);
    fixture.detectChanges();

    expect(s.value).toBe('(+91) 9096-174-175');

  });
});
