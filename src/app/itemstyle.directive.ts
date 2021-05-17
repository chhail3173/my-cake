import { element } from 'protractor';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appItemstyle]'
})
export class ItemstyleDirective {
  element:any;

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;
   }

   @HostListener ('mouseenter') enterHover () {
     this.element.style.transform = 'scale(1.1)'
     this.element.style.transition = "all 1s"
   }

   @HostListener ('mouseleave') leaveHover () {
    this.element.style.transform = 'scale(1)'
  }

}
