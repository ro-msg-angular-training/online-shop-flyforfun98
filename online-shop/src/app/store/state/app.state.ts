import {initialUserState, IUserState} from './user.state';
import {initialProductState, IProductState} from './product.state';
import {initialShoppingCartState, IShoppingCartState} from './shopping-cart.state';

export interface IAppState {
  user: IUserState;
  product: IProductState;
  cart: IShoppingCartState;
}

export const initialAppState: IAppState = {
  user: initialUserState,
  product: initialProductState,
  cart: initialShoppingCartState
};

export function getInitialState() {
  return initialAppState;
}
