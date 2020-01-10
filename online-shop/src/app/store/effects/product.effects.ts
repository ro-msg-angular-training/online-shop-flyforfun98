import {ProductService} from '../../products/product.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {map, switchMap, tap} from 'rxjs/operators';
import {
  AddNewProduct, AddNewProductSuccess,
  EProductActions,
  GetAllProducts,
  GetAllProductsSuccess,
  GetProduct,
  GetProductSuccess, RemoveProduct, RemoveProductSuccess, UpdateProduct, UpdateProductSuccess
} from '../actions/product.actions';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {NormalizedProducts} from '../../models/normalized-products';

@Injectable()
export class ProductEffects {

  @Effect()
  getProduct$ = this.actions$.pipe(
    ofType<GetProduct>(EProductActions.GetProduct),
    map(action => action.payload),
    switchMap(payload => this.productService.getProduct(payload).pipe(
      map(product => new GetProductSuccess(product))
    )));

  @Effect()
  getAllProducts$ = this.actions$.pipe(
    ofType<GetAllProducts>(EProductActions.GetAllProducts),
    switchMap(() => this.productService.getAllProducts()),
    switchMap(products => {

      const normalizedProducts = new NormalizedProducts();
      const data = products;
      const ui = {allIds: products.map(product => product.id)};
      normalizedProducts.entities = {data, ui};

      return of(new GetAllProductsSuccess(normalizedProducts));
    })
  );

  @Effect()
  addNewProduct$ = this.actions$.pipe(
    ofType<AddNewProduct>(EProductActions.AddNewProduct),
    map(action => action.payload),
    switchMap(payload => this.productService.createProduct(payload).pipe(
      map(newProduct => new AddNewProductSuccess(newProduct)
      )))
  );

  @Effect({dispatch: false})
  addNewProductSuccess$ = this.actions$.pipe(
    ofType<AddNewProductSuccess>(EProductActions.AddNewProductSuccess),
    tap(() => this.router.navigate(['products']))
  );

  @Effect()
  removeProduct$ = this.actions$.pipe(
    ofType<RemoveProduct>(EProductActions.RemoveProduct),
    map(action => action.payload),
    switchMap(payload => this.productService.removeProduct(payload).pipe(
      map(() => new RemoveProductSuccess(payload))
    ))
  );

  @Effect({dispatch: false})
  removeProductSuccess$ = this.actions$.pipe(
    ofType<RemoveProductSuccess>(EProductActions.RemoveProductSuccess),
    tap(() => this.router.navigate(['products']))
  );

  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType<UpdateProduct>(EProductActions.UpdateProduct),
    map(action => action.payload),
    switchMap(payload => this.productService.editProduct(payload.id, payload).pipe(
      map(() => {
        return new UpdateProductSuccess(payload);
      })
    ))
  );

  @Effect({dispatch: false})
  updateProductSuccess$ = this.actions$.pipe(
    ofType<UpdateProductSuccess>(EProductActions.UpdateProductSuccess),
    tap(editedProduct => this.router.navigate(['products/' + editedProduct.payload.id]))
  );

  constructor(private productService: ProductService,
              private actions$: Actions,
              private router: Router) {
  }
}
