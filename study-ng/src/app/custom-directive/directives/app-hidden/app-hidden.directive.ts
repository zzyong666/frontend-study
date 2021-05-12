import { Directive, ElementRef, Input } from '@angular/core';
/**
 * @type 属性型指令
 * @description 显示隐藏宿主元素（通过改变display实现）
 * @description 需要注入了ElementRef
 */
@Directive({
  selector: '[appHidden]'
})
export class AppHiddenDirective {
  /**
   * 存储宿主元素原始的display样式
   */
  private _originDisplay: string = '';

  @Input()
  set appHidden(condition: boolean) {
    const targetStyle = this.el.nativeElement.style;
    if (!!targetStyle) {
      if (condition) {
        targetStyle.display = "none";
      } else {
        targetStyle.display = this._originDisplay;
      }
    }
  }

  
  constructor(private el: ElementRef<any>) {
    this._originDisplay = this.el.nativeElement.style.display
  }

}
