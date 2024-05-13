import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // this.elRef.nativeElement.contains(event.target),
    //  we're asking if the place you clicked (event.target) is inside the part of the webpage our hand is holding (elRef.nativeElement).
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
