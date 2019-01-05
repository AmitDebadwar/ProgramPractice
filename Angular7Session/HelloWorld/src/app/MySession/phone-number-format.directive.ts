import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPhoneNumberFormat]'
})
export class PhoneNumberFormatDirective {

  constructor(private el: ElementRef) { }

  public phoneFormat(value) {
   var numbers = value && value.replace(/-/g, "");
    var matches = numbers && numbers.match(/^(\d{4})(\d{3})(\d{3})$/);

    if (matches) {
    
      return "(+91) " + matches[1] + "-" + matches[2] + "-" + matches[3];
    }

    return value;
  }

  @HostListener('keyup')
  onKeyup() {
     
          var temp= this.el.nativeElement.value.replace(/(91)/g,"sai");  
          this.el.nativeElement.value= this.phoneFormat(this.el.nativeElement.value);


  }

  @HostListener('blur')
  onBlur() {

  }

  @HostListener('focus')
  onFocus() {

  }
}
