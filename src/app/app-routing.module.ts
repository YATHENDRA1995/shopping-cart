import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    // loadChildren: './layout/layout.module#LayoutModule',
    loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'layout',
    loadChildren: () => import('src/app/layout/layout.module').then(m => m.LayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
