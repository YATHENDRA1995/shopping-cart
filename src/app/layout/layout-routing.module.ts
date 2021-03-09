import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'project' },
      {
        path: 'project',
        loadChildren: () => import('src/app/layout/project/project.module').then(m => m.ProjectModule)
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
