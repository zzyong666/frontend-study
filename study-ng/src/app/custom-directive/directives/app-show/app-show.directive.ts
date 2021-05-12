import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
/**
 * @type 结构型指令
 * @description 显示隐藏宿主元素（通过将宿主元素在容器中删除/装入容器中）
 * @description 需要注入了TemplateRef
 */
@Directive({
  selector: '[appShow]'
})
export class AppShowDirective {
  hasView: boolean = false;

  @Input()
  set appShow(condition: boolean) {
    if (condition && !this.hasView) {
      // 实例化宿主元素并将其插入容器中
      this.viewRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else {
      this.viewRef.clear();
      this.hasView = false;
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}
