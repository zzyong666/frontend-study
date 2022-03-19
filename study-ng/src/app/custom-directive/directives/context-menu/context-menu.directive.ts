import { ComponentFactoryResolver, Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[contextMenu]'
})
export class ContextMenuDirective {

  @Input()
  contextMenu: TemplateRef<any>;

  @Input()
  contextMenuData: any;

  constructor(private el: ElementRef<any>, private componentFactoryResolver: ComponentFactoryResolver) {
    // 阻止浏览器的右键菜单弹框
    document.oncontextmenu = function () {
      return false;
    }
  }

  @HostListener('contextmenu', ['$event'])
  contextMenuListener(e: MouseEvent) {
    // 获取鼠标点击相对于浏览器的位置
    const { clientX, clientY } = e;
    // this.generateModal();
    this.generateMenu(clientX, clientY);
    const dom = document.getElementById('custom-menu');
    console.dir(dom);
  }
  /**
   * 生成蒙版
   */
  generateModal() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.left = '0px';
    modal.style.top = '0px';
    modal.style.backgroundColor = 'rgb(122,122,122,0.2)';
    modal.style.zIndex = '999';
    document.body.appendChild(modal);
  }
  generateMenu(x: number, y: number) {
    const menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    menu.style.backgroundColor = 'black';
    menu.style.borderRadius = '2px 2px';
    menu.style.zIndex = '9999';
    menu.style.minWidth = '60px';
    menu.style.minHeight = '60px';
    menu.id = 'custom-menu';
    document.body.appendChild(menu);
  }
}
