import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick.dbl]'
})
export class AppDblClickDirective {

  @Output('appClick.dbl')
  appdblClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  @HostListener('dblclick', ['$event'])
  OndblClick(e: MouseEvent) {
    e.stopPropagation();
    this.appdblClick.emit(e);
  }
}
