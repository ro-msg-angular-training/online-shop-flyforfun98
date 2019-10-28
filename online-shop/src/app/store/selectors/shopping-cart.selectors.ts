import {createSelector} from '@ngrx/store';
import {IShoppingCartState} from '../state/shopping-cart.state';
import {IAppState} from '../state/app.state';

const selectItems = (state: IAppState) => state.cart;

export const selectShoppingCartList = createSelector(
  selectItems,
  (state: IShoppingCartState) => state.items
);

export const selectOrderInput = createSelector(
  selectItems,
  (state: IShoppingCartState) => state.order
);
