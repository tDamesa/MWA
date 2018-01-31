import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {
  constructor(private renderer2: Renderer2, private e: ElementRef) {
    renderer2.setStyle(e.nativeElement, 'font-size', '22px');
  }
  index: number = 0;
  public colors = [
    'red',
    'yellow',
    'Orange',
    'Green',
    'Cyan',
    'Blue',
    'Indigo',
    'Violet'
  ];
  @HostListener('click', ['$event'])
  MyColor() {
    this.index = Math.floor(Math.random() * 20);
    this.renderer2.setStyle(
      this.e.nativeElement,
      'background-color',
      this.colors[this.index]
    );
  }
}
