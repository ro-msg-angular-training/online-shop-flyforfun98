import {ShoppingCartService} from '../../shopping-cart/shopping-cart.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {
  CreateCheckout, CreateCheckoutSuccess,
  EShoppingCartActions, GetAllShoppingItemsSuccess, RemoveShoppingItem, RemoveShoppingItemSuccess
} from '../actions/shopping-cart.actions';
import {map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

export class ShoppingCartEffects {

  /*
    No side-effects available for this tutorial => no use of effects for this class
  */

  @Effect()
  createCheckout$ = this.actions$.pipe(
    ofType<CreateCheckout>(EShoppingCartActions.CreateCheckout),
    map(action => action.payload),
    switchMap(payload => this.cartService.checkout(payload).pipe(
      map(() => {
        return new CreateCheckoutSuccess(payload);
      })
    )));

  @Effect({dispatch: false})
  createCheckoutSuccess$ = this.actions$.pipe(
    ofType<CreateCheckoutSuccess>(EShoppingCartActions.CreateCheckoutSuccess),
    tap(() => this.router.navigate(['products']))
  );

  @Effect()
  getAllShoppingItems$ = this.actions$.pipe(
    ofType<GetAllShoppingItemsSuccess>(EShoppingCartActions.GetAllShoppingItems),
    map(action => action.payload),
    switchMap(() => {
      const items = this.cartService.getShoppingCartItems();
      return of(new GetAllShoppingItemsSuccess(items));
    }),
  );

  @Effect()
  removeShoppingItem$ = this.actions$.pipe(
    ofType<RemoveShoppingItem>(EShoppingCartActions.RemoveShoppingItem),
    map(action => action.payload),
    switchMap(payload => {
      this.cartService.removeItem(payload);
      return of(new RemoveShoppingItemSuccess(payload));
    })
  );

  constructor(private cartService: ShoppingCartService,
              private actions$: Actions,
              private router: Router) {
  }
}
