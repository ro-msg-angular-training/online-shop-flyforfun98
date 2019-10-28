import {Action} from '@ngrx/store';
import {ShoppingCartItem} from '../../models/shopping-cart-item';
import {OrderInput} from '../../models/order-input';

export enum EShoppingCartActions {
  GetAllShoppingItems = '[Shopping Cart] Get All Shopping Items',
  GetAllShoppingItemsSuccess = '[Shopping Cart] Get All Shopping Items Success',
  CreateCheckout = '[Shopping Cart] Create Checkout',
  CreateCheckoutSuccess = '[ShoppingCart] Create Checkout Success'
}

export class GetAllShoppingItems implements Action {
  public readonly type = EShoppingCartActions.GetAllShoppingItems;
}

export class GetAllShoppingItemsSuccess implements Action {
  public readonly type = EShoppingCartActions.GetAllShoppingItemsSuccess;

  constructor(public payload: ShoppingCartItem[]) {
  }
}

export class CreateCheckout implements Action {
  public readonly type = EShoppingCartActions.CreateCheckout;

  constructor(public payload: OrderInput) {
  }
}

export class CreateCheckoutSuccess implements Action {
  public readonly type = EShoppingCartActions.CreateCheckoutSuccess;

  constructor(public payload: OrderInput) {
  }
}

export type ShoppingCartActions =
  GetAllShoppingItems
  | GetAllShoppingItemsSuccess
  | CreateCheckout
  | CreateCheckoutSuccess;
