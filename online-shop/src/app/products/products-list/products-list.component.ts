import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IAppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {GetAllProducts} from '../../store/actions/product.actions';
import {selectProductList} from '../../store/selectors/product.selectors';
import {AuthService} from '../../login-page/auth.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css',
    '../product-details/product-details.component.css'],
})
export class ProductListComponent implements OnInit {

  products: any; // Product[] = [];
  columnNames: string[] = ['Name', 'Category', 'Price'];

  constructor(private router: Router,
              private authService: AuthService,
              private store: Store<IAppState>) {

    this.store.select(selectProductList).subscribe(products => {
      this.products = products;
    });
  }

  ngOnInit() {

    this.store.dispatch(new GetAllProducts());
  }


  onLoadProduct(id: number) {
    this.router.navigate(['/products/' + id]);
  }

}
