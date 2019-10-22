import {Component, OnInit} from '@angular/core';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {ShoppingCartService} from './shopping-cart.service';
import {Router} from '@angular/router';
import {AuthService} from '../login-page/auth.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css',
    '../products/products-list/products-list.component.css',
    '../products/product-details/product-details.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItems: ShoppingCartItem[] = [];
  productColumn = ['Name', 'Category', 'Price', 'Quantity', 'Action'];

  constructor(private shoppingService: ShoppingCartService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.shoppingCartItems = this.shoppingService.getShoppingCartItems();
  }


  onCheckout() {
    this.shoppingService.checkout(this.authService.user);
    this.router.navigate(['products']);
    this.shoppingService.clearShoppingCart();
  }

  removeItem(item: any) {
    this.shoppingService.removeItem(item);
  }
}
