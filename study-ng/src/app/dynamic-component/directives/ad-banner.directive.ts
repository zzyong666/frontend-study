import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]'
})
export class AdBannerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
