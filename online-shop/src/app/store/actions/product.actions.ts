import {Action} from '@ngrx/store';
import {Product} from '../../models/product';
import {NormalizedProducts} from '../../models/normalized-products';

export enum EProductActions {
  GetProduct = '[Product] Get Product',
  GetProductSuccess = '[Product] Get Product Success',
  GetAllProducts = '[Product] Get All Products',
  GetAllProductsSuccess = '[Product] Get All Products Success',
  AddNewProduct = '[Product] Add New Product',
  AddNewProductSuccess = '[Product] Add New Product Success',
  RemoveProduct = '[Product] Remove Product',
  RemoveProductSuccess = '[Product] Remove Product Success',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success'
}

export class GetProduct implements Action {
  public readonly type = EProductActions.GetProduct;

  constructor(public payload: number) {
  }
}

export class GetProductSuccess implements Action {
  public readonly type = EProductActions.GetProductSuccess;

  constructor(public payload: Product) {
  }
}

export class GetAllProducts implements Action {
  public readonly type = EProductActions.GetAllProducts;
}

export class GetAllProductsSuccess implements Action {
  public readonly type = EProductActions.GetAllProductsSuccess;

  constructor(public payload: NormalizedProducts) {
  }
}

export class AddNewProduct implements Action {
  public readonly type = EProductActions.AddNewProduct;

  constructor(public payload: Product) {
  }
}

export class AddNewProductSuccess implements Action {
  public readonly type = EProductActions.AddNewProductSuccess;

  constructor(public payload: Product) {
  }
}

export class RemoveProduct implements Action {
  public readonly type = EProductActions.RemoveProduct;

  constructor(public payload: number) {
  }
}

export class RemoveProductSuccess implements Action {
  public readonly type = EProductActions.RemoveProductSuccess;

  constructor(public payload: number) {
  }
}

export class UpdateProduct implements Action {
  public readonly type = EProductActions.UpdateProduct;

  constructor(public payload: Product) {
  }
}

export class UpdateProductSuccess implements Action {
  public readonly type = EProductActions.UpdateProductSuccess;

  constructor(public payload: Product) {
  }
}

export type ProductActions =
  GetProduct
  | GetProductSuccess
  | GetAllProducts
  | GetAllProductsSuccess
  | AddNewProduct
  | AddNewProductSuccess
  | RemoveProduct
  | RemoveProductSuccess
  | UpdateProduct
  | UpdateProductSuccess;
