import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

export enum MouseButtonType {
  'LeftButton' = 0,
  'MiddleButton' = 1,
  'RightButton' = 2,
}

/**
 * 
 */
@Directive({
  selector: '[appClick]'
})
export class AppClickDirective {

  /**
   * @description 需要使用的是鼠标哪一个按键（左中右）， 默认为左键
   * @param {MouseButtonType}
   */
  @Input('type')
  mouseButton: MouseButtonType = MouseButtonType.LeftButton;

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
    if (e.button === this.mouseButton) {
      this.appClick.emit(e);
    }
  }
}
