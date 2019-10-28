import {initialProductState, IProductState} from '../state/product.state';
import {EProductActions, ProductActions} from '../actions/product.actions';

export const productReducers = (
  state = initialProductState,
  action: ProductActions
): IProductState => {
  switch (action.type) {
    case EProductActions.GetProductSuccess:
      return {
        ...state,
        selectedProduct: action.payload
      };
    case EProductActions.GetAllProductsSuccess:
      return {
        ...state,
        products: action.payload
      };
    case EProductActions.AddNewProductSuccess:
      return {
        ...state,
        products: state.products.concat(action.payload)
      };
    case EProductActions.RemoveProductSuccess:
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      };
    case EProductActions.UpdateProductSuccess:

      const productIndex = state.products.findIndex(p => p.id === action.payload.id);
      if (productIndex === -1) {
        return state;
      }

      const updatedProducts = {...state};
      updatedProducts[productIndex] = action.payload;
      updatedProducts.selectedProduct = action.payload;
      return updatedProducts;

    default:
      return state;
  }
};
