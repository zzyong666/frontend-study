import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Output()
  appHover: EventEmitter<any> = new EventEmitter();

  constructor() { }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e) {
    this.appHover.emit(true);
  }

  @HostListener('mouseleave', ['$event'])
  onMounseLeave(e) {
    this.appHover.emit(false);
  }
}
