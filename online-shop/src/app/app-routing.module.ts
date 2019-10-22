import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './login-page/auth.guard';
import {ProductEditComponent} from './products/product-edit/product-edit.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ProductListComponent} from './products/products-list/products-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'products', component: ProductListComponent, canActivate: [AuthGuard]},
  {path: 'products/add', component: ProductAddComponent, canActivate: [AuthGuard], data: {roles: 'admin'}},
  {path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuard]},
  {path: 'products/:id/edit', component: ProductEditComponent, canActivate: [AuthGuard], data: {roles: 'admin'}},
  {path: 'my-cart', component: ShoppingCartComponent, canActivate: [AuthGuard], data: {roles: 'customer'}},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
