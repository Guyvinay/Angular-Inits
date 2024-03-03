import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]',
  standalone: true
})
export class HighlightsDirective {

  constructor(private el: ElementRef) {
    console.log("dfgh")
   }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("Hii")
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
