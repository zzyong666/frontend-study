import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { AdBannerDirective } from './directives/ad-banner.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdOneComponent } from './ad-one/ad-one.component';
import { AdTwoComponent } from './ad-two/ad-two.component';
import { AdIndexComponent } from './ad-index/ad-index.component';


@NgModule({
  declarations: [
    AdBannerDirective,
    AdBannerComponent,
    AdOneComponent,
    AdTwoComponent,
    AdIndexComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule
  ]
})
export class DynamicComponentModule { }
