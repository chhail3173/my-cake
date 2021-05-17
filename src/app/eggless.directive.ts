import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEggless]'
})
export class EgglessDirective {
  element:any;

  constructor(private dr:ElementRef) {
    this.element = this.dr.nativeElement;
   }

}
