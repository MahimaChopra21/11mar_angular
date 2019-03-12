import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private el: ElementRef) { }
  @Input('appChangecolor') changeColor: string;
  @HostListener('mouseover', ['$event']) mouseOverEvent(event) {
    this.el.nativeElement.style.color = this.changeColor || 'blue';
  }

  @HostListener('mouseleave') mouseLeaveEvent() {
    this.el.nativeElement.style.color = null;
  }


  @HostListener('window:scroll', ['$event']) scrollEvent(event) {

  }


}
