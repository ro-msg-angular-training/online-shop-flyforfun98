import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ShoppingCartService} from '../../shopping-cart/shopping-cart.service';
import {AuthService} from '../../login-page/auth.service';
import {IAppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {selectSelectedProduct} from '../../store/selectors/product.selectors';
import {GetProduct, RemoveProduct} from '../../store/actions/product.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  productId: number;
  productQuantity = 1;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private shoppingService: ShoppingCartService,
              public authService: AuthService,
              private store: Store<IAppState>) {

    this.store.select(selectSelectedProduct).subscribe(product => this.product = product);
  }

  ngOnInit() {

    this.productId = this.route.snapshot.params.id;
    this.store.dispatch(new GetProduct(this.productId));
  }

  onDelete() {

    this.store.dispatch(new RemoveProduct(this.productId));
  }

  onAdd() {
    this.shoppingService.addItem(this.product, this.productQuantity);
  }

  onEdit() {
    this.router.navigate(['products/' + this.productId + '/edit']);
  }

  countUp() {
    this.productQuantity++;
  }

  countDown() {
    if (this.productQuantity > 1) {
      this.productQuantity--;
    }
  }
}
