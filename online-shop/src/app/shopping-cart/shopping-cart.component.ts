import {Component, OnInit} from '@angular/core';
import {ShoppingCartItem} from '../models/shopping-cart-item';
import {ShoppingCartService} from './shopping-cart.service';
import {Router} from '@angular/router';
import {AuthService} from '../login-page/auth.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {selectShoppingCartList} from '../store/selectors/shopping-cart.selectors';
import {CreateCheckout, GetAllShoppingItems, RemoveShoppingItem} from '../store/actions/shopping-cart.actions';
import {OrderInput} from '../models/order-input';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css',
    '../products/products-list/products-list.component.css',
    '../products/product-details/product-details.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItems: ShoppingCartItem[];
  productColumn = ['Name', 'Category', 'Price', 'Quantity', 'Action'];

  constructor(private shoppingService: ShoppingCartService,
              private router: Router,
              private authService: AuthService,
              private store: Store<IAppState>) {

    this.store.select(selectShoppingCartList).subscribe(items => this.shoppingCartItems = items);
  }

  ngOnInit() {
    this.store.dispatch(new GetAllShoppingItems());
  }


  onCheckout() {

    const order = new OrderInput();
    order.customer = this.authService.user.username;
    order.products = this.shoppingService.getShoppingCartItems().map((item) => ({
      productId: item.product.id,
      quantity: item.quantity
    }));
    this.store.dispatch(new CreateCheckout(order));
    this.router.navigate(['products']);
    this.shoppingService.clearShoppingCart();
  }

  removeItem(itemToBeRemoved: ShoppingCartItem) {
    this.store.dispatch(new RemoveShoppingItem(itemToBeRemoved));
  }
}
