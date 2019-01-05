import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector : '[hreffdgdfgd]'
})
export class HrefStopPropogationDirective {
  @Input() public href: string | undefined;
  constructor() { }

  @HostListener('click', ['$event']) public onClick(event: Event): void {
   
    if (!this.href || this.href === '#' || (this.href && this.href.length === 0)) {
       
    }
  }
}
 