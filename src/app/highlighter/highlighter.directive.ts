import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  constructor() {}

  @HostBinding('style.color') txtColor;

  @HostListener('mouseenter') onMouseEnter() {
    this.txtColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.txtColor = 'black';
  }
}
