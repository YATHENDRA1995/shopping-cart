import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, AboutUsComponent, CartComponent, InventoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
