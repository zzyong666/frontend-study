import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { LifecycleIndexComponent } from './lifecycle-index/lifecycle-index.component';
import { LifecycleItemComponent } from './lifecycle-item/lifecycle-item.component';


@NgModule({
  declarations: [
    LifecycleIndexComponent,
    LifecycleItemComponent
  ],
  imports: [
    CommonModule,
    LifecycleRoutingModule
  ]
})
export class LifecycleModule { }
