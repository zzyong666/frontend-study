import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

/**
 * 
 */
@Directive({
  selector: '[appClick]'
})
export class AppClickDirective {

  /**
   * @description 
   * 需要使用的是鼠标哪一个按键（左中右）， 默认为左键0
   */
  @Input('type')
  buttonIndex: number = 0;

  @Output()
  appClick: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {
    // 阻止浏览器的右键菜单弹框
    document.oncontextmenu = function () {
      return false;
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(e: MouseEvent) {
    e.stopPropagation();
    if (e.button === this.buttonIndex) {
      this.appClick.emit(e);
    }
  }
}
