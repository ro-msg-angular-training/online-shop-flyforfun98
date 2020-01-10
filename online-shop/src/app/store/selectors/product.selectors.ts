import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {IProductState} from '../state/product.state';

const selectProducts = (state: IAppState) => state.product;

export const selectSelectedProduct = createSelector(
  selectProducts,
  (state: IProductState) => state.selectedProduct
);

export const selectNormProductList = createSelector(
  selectProducts,
  (state: IProductState) => state.entities
);

export const selectProductList = createSelector(
  selectNormProductList,
  (state: IProductState) => {
    return Object.keys(state).map(() => state.entities.data)[0];
  }
);

