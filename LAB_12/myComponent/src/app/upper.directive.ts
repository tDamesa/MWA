import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {
  constructor(private e: ElementRef, private renderer2: Renderer2) {
    renderer2.setStyle(e.nativeElement, 'text-transform', 'uppercase');
  }
}
