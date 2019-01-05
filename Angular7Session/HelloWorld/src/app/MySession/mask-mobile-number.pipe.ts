import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskMobileNumber'
})
export class MaskMobileNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(!value)
    return null;
     debugger;
    return "XXXXXX" + value.slice(6);
  }

}
