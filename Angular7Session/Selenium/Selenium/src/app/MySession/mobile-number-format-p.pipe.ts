import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileNumberFormatP'
})
export class MobileNumberFormatPPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value)
      return null;
     
    var phoneFormat = function (value) {
      var numbers = value && value.replace(/-/g, "");
      var matches = numbers && numbers.match(/^(\d{4})(\d{3})(\d{3})$/);

      if (matches) {
        return "(+91) " + matches[1] + "-" + matches[2] + "-" + matches[3];
      }

      return undefined;
    }

    return phoneFormat(value);


  }

}
