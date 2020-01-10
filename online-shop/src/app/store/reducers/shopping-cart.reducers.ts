import {initialShoppingCartState, IShoppingCartState} from '../state/shopping-cart.state';
import {EShoppingCartActions, ShoppingCartActions} from '../actions/shopping-cart.actions';

export const cartReducers = (
  state = initialShoppingCartState,
  action: ShoppingCartActions
): IShoppingCartState => {

  switch (action.type) {

    case EShoppingCartActions.GetAllShoppingItemsSuccess:
      return {
        ...state,
        items: action.payload
      };

    case EShoppingCartActions.CreateCheckoutSuccess:
      return {
        ...state,
        order: action.payload
      };

    case EShoppingCartActions.RemoveShoppingItemSuccess:
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload.product.id)
      };
    default:
      return state;
  }

};

