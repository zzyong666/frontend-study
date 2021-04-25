import { AdBannerDirective } from './../directives/ad-banner.directive';
import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { AdComponent } from '../interfaces/ad-component';
import { AdItem } from '../interfaces/ad-item';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit {
  // 广告组件的数组
  @Input()
  ads: AdItem[];

  currentAdIndex = -1;

  @ViewChild(AdBannerDirective, { static: true })
  adHost: AdBannerDirective;

  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  loadComponent() {
    // 获取当前ad
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];
    // 组件工厂
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // 通过指令类来获取对容器的访问权
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    // 通过指令来创建动态组件
    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);

    componentRef.instance.data = adItem.data;
  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
