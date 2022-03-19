import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { ExampleComponent } from './example/example.component';
import { HoverDirective } from './directives/hover/hover.directive';
import { AppHiddenDirective } from './directives/app-hidden/app-hidden.directive';
import { AppShowDirective } from './directives/app-show/app-show.directive';
import { AppClickDirective } from './directives/app-click/app-click.directive';
import { AppShareModule } from '../../modules/app-share-module.module';
import { AppDblClickDirective } from './directives/app-dbl-click/app-dbl-click.directive';
import { ContextMenuDirective } from './directives/context-menu/context-menu.directive';



@NgModule({
  declarations: [
    AppHiddenDirective,
    ExampleComponent,
    HoverDirective,
    AppShowDirective,
    AppClickDirective,
    AppDblClickDirective,
    ContextMenuDirective
  ],
  imports: [
    CommonModule,
    CustomDirectiveRoutingModule,
    AppShareModule
  ]
})
export class CustomDirectiveModule { }
