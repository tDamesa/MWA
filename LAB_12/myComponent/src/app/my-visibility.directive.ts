import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyVisibilityDirective implements OnInit {
  @Input('appMyVisibility') appMyVisibility: boolean;
  constructor(private e: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    if (this.appMyVisibility === false) {
      this.renderer2.setStyle(this.e.nativeElement, 'display', 'none');
    } else {
      this.renderer2.setStyle(this.e.nativeElement, 'display', 'block');
    }
  }
}
