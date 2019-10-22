import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ShoppingCartService} from '../../shopping-cart/shopping-cart.service';
import {AuthService} from "../../login-page/auth.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  productId: number;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private shoppingService: ShoppingCartService,
              private authService: AuthService) {
  }

  ngOnInit() {

    this.productId = this.route.snapshot.params.id;
    this.productService.getProduct(this.productId).subscribe(product => this.product = product);

  }

  onDelete() {

    this.productService.removeProduct(this.productId).subscribe(() =>
      this.router.navigate(['products'])
    );
  }

  onAdd() {
    this.shoppingService.addItem(this.product);
  }

  onEdit() {
    this.router.navigate(['products/' + this.productId + '/edit']);
  }
}
