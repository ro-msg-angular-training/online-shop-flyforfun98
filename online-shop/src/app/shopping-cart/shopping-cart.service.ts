import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderInput} from '../models/order-input';
import {AppConfig} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: ShoppingCartItem[] = [];
  private ordersUrl = AppConfig.API_ENDPOINT + '/orders';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getShoppingCartItems(): ShoppingCartItem[] {
    return this.shoppingCart;
  }

  clearShoppingCart() {
    this.shoppingCart = [];
  }

  checkout(order: OrderInput): Observable<{}> {

    return this.http.post<OrderInput>(this.ordersUrl, order, this.httpOptions);
  }

  addItem(product: Product): void {

    let added = false;
    const shoppingCartItem = new ShoppingCartItem();
    shoppingCartItem.product = product;
    shoppingCartItem.quantity = 1;

    if (this.shoppingCart.length === 0) {
      this.shoppingCart.push(shoppingCartItem);
      return;
    }
    for (const item of this.shoppingCart) {
      if (item.product.id === product.id) {
        added = true;
        item.quantity++;
      }
    }

    if (added !== true) {
      this.shoppingCart.push(shoppingCartItem);
    }
  }

  removeItem(item: any): void {

    this.shoppingCart.splice(this.shoppingCart.indexOf(item), 1);
  }
}
