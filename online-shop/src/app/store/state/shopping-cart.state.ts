import {ShoppingCartItem} from '../../models/shopping-cart-item';
import {OrderInput} from '../../models/order-input';

export interface IShoppingCartState {
  items: ShoppingCartItem[];
  order: OrderInput;
}

export const initialShoppingCartState: IShoppingCartState = {
  items: [],
  order: null
};
