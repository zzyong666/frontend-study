import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dynamic-component',
    loadChildren: () => import('./dynamic-component/dynamic-component.module').then(m => m.DynamicComponentModule)
  },
  {
    path: 'life-cycle',
    loadChildren: () => import('./lifecycle/lifecycle.module').then(m => m.LifecycleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
