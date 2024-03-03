import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  standalone: true
})
export class UppercaseDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.textTransform = "uppercase";
  }
}
