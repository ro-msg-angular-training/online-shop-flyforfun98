import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../../models/product';
import {AuthService} from '../../login-page/auth.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css',
    '../product-details/product-details.component.css'],
})
export class ProductListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  products: Product[] = [];
  columnNames: string[] = ['Name', 'Category', 'Price'];

  authService: AuthService;
  constructor(private productsService: ProductService,
              private router: Router,
              authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(result => {
      this.products = result;
    });
  }


  onLoadProduct(id: number) {
    this.router.navigate(['/products/' + id]);
  }

}
