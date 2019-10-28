import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {userReducers} from './user.reducers';
import {productReducers} from './product.reducers';
import {cartReducers} from './shopping-cart.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  user: userReducers,
  product: productReducers,
  cart: cartReducers
};
