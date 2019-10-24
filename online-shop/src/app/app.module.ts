import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from './login-page/login-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatDividerModule, MatCheckboxModule,
  MatCardModule, MatTableModule, MatFormFieldModule,
  MatGridListModule, MatInputModule, MatIconModule,
  MatListModule, MatSidenavModule
} from '@angular/material';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {ProductListComponent} from './products/products-list/products-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ShoppingCartComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTableModule, MatButtonModule, MatCheckboxModule,
    MatDividerModule, MatIconModule, MatGridListModule, MatListModule, MatSidenavModule, MatPaginatorModule, MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
