import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../../models/product';
import {AuthService} from "../../login-page/auth.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css',
              '../product-details/product-details.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  columnNames: string[] = ['Name', 'Category', 'Price'];

  constructor(private productsService: ProductService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(result => this.products = result);
  }

  onLoadProduct(id: number) {
    this.router.navigate(['/products/' + id]);
  }

}
