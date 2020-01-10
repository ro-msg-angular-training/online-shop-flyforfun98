import {Action} from '@ngrx/store';
import {ShoppingCartItem} from '../../models/shopping-cart-item';
import {OrderInput} from '../../models/order-input';

export enum EShoppingCartActions {
  GetAllShoppingItems = '[Shopping Cart] Get All Shopping Items',
  GetAllShoppingItemsSuccess = '[Shopping Cart] Get All Shopping Items Success',
  CreateCheckout = '[Shopping Cart] Create Checkout',
  CreateCheckoutSuccess = '[Shopping Cart] Create Checkout Success',
  RemoveShoppingItem = '[Shopping Cart] Remove Shopping Item',
  RemoveShoppingItemSuccess = '[Shopping Cart] Remove Shopping Item Success'
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

export class RemoveShoppingItem implements Action {
  public readonly type = EShoppingCartActions.RemoveShoppingItem;

  constructor(public payload: ShoppingCartItem) {
  }
}

export class RemoveShoppingItemSuccess implements Action {
  public readonly type = EShoppingCartActions.RemoveShoppingItemSuccess;

  constructor(public payload: ShoppingCartItem) {
  }
}

export type ShoppingCartActions =
  GetAllShoppingItems
  | GetAllShoppingItemsSuccess
  | CreateCheckout
  | CreateCheckoutSuccess
  | RemoveShoppingItem
  | RemoveShoppingItemSuccess;
