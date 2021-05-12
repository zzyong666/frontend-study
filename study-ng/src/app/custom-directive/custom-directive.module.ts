import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { ExampleComponent } from './example/example.component';
import { HoverDirective } from './directives/hover/hover.directive';
import { AppHiddenDirective } from './directives/app-hidden/app-hidden.directive';
import { AppShowDirective } from './directives/app-show/app-show.directive';



@NgModule({
  declarations: [
    AppHiddenDirective,
    ExampleComponent,
    HoverDirective,
    AppShowDirective
  ],
  imports: [
    CommonModule,
    CustomDirectiveRoutingModule
  ]
})
export class CustomDirectiveModule { }
